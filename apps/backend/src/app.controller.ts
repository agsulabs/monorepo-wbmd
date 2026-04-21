import { Controller, Dependencies, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import type { HealthCheckResult } from '@nestjs/terminus';
import { HealthCheck, HealthCheckService, MemoryHealthIndicator } from '@nestjs/terminus';

import { HealthResponseDto } from './app/dto/health-response.dto';

@ApiTags('health')
@Controller('health')
@Dependencies(HealthCheckService, MemoryHealthIndicator)
export class AppController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @ApiOkResponse({
    description: 'Compatibility health check',
    type: HealthResponseDto,
  })
  health(): HealthResponseDto {
    return { ok: true };
  }

  @Get('live')
  @HealthCheck()
  @ApiOkResponse({ description: 'Liveness health check' })
  live(): Promise<HealthCheckResult> {
    return this.healthCheckService.check([
      () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
    ]);
  }

  @Get('ready')
  @HealthCheck()
  @ApiOkResponse({ description: 'Readiness health check' })
  ready(): Promise<HealthCheckResult> {
    return this.healthCheckService.check([
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
    ]);
  }
}
