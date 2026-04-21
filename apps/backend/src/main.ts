import { randomUUID } from 'node:crypto';
import process from 'node:process';

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { NextFunction, Request, Response } from 'express';

import { AppModule } from './app.module';

type RequestWithId = Request & {
  requestId?: string;
};

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5174',
      'http://127.0.0.1:5174',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
    exposedHeaders: ['X-Request-Id'],
  });

  app.use((req: RequestWithId, res: Response, next: NextFunction) => {
    const startedAt = Date.now();
    const headerRequestId = req.header('x-request-id');
    const requestId = headerRequestId?.trim() || randomUUID();

    req.requestId = requestId;
    res.setHeader('X-Request-Id', requestId);

    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    let completed = false;

    const logFinished = (event: 'finish' | 'close') => {
      if (completed) {
        return;
      }

      completed = true;
      const durationMs = Date.now() - startedAt;

      logger.log(
        `[${requestId}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${durationMs}ms - ip=${clientIp} - event=${event}`,
      );
    };

    res.on('finish', () => {
      logFinished('finish');
    });

    res.on('close', () => {
      logFinished('close');
    });

    next();
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Monorepo API')
    .setDescription('Backend API for web/desktop/mobile')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document);

  app.use('/api-json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(document);
  });

  await app.listen(3001, '0.0.0.0');

  logger.log('Backend started on http://localhost:3001');
  logger.log('Health: http://localhost:3001/health');
  logger.log('Health live: http://localhost:3001/health/live');
  logger.log('Health ready: http://localhost:3001/health/ready');
  logger.log('Swagger UI: http://localhost:3001/api');
  logger.log('OpenAPI JSON: http://localhost:3001/api-json');
}

bootstrap().catch((error: unknown) => {
  const logger = new Logger('Bootstrap');
  logger.error('Failed to start backend', error);
  process.exit(1);
});
