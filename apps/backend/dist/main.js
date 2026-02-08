"use strict";
/**
 * apps/backend/src/main.ts
 *
 * БАЗОВАЯ настройка backend для монорепы:
 * 1) Поднимаем Nest на 3001
 * 2) Включаем CORS для dev (web + desktop)
 * 3) Настраиваем Swagger:
 *    - UI:   http://localhost:3001/api
 *    - JSON: http://localhost:3001/api-json  (стабильно для генерации SDK)
 *
 * Дополнительно:
 * - слушаем 0.0.0.0 чтобы mobile мог подключаться по LAN IP
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    /**
     * CORS для dev:
     * - web:     Vite на 5173
     * - desktop: Vite на 5174 (Tauri dev)
     *
     * Если поменяешь порт desktop — добавь сюда новый origin.
     */
    app.enableCors({
        origin: [
            "http://localhost:5173",
            "http://127.0.0.1:5173",
            "http://localhost:5174",
            "http://127.0.0.1:5174",
        ],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    });
    /**
     * Swagger базовая конфигурация.
     */
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle("Monorepo API")
        .setDescription("Backend API for web/desktop/mobile")
        .setVersion("1.0.0")
        .build();
    /**
     * Создаём OpenAPI документ (объект JSON).
     */
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    /**
     * Swagger UI по /api
     */
    swagger_1.SwaggerModule.setup("api", app, document);
    /**
     * OpenAPI JSON по /api-json (стабильно для генерации).
     *
     * Важно:
     * - Nest сам по себе не делает /api-json автоматически
     * - поэтому делаем явный маршрут
     */
    app.use("/api-json", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(document);
    });
    /**
     * Важно для mobile:
     * - 0.0.0.0 позволяет принимать запросы с других устройств в LAN
     */
    await app.listen(3001, "0.0.0.0");
}
bootstrap();
//# sourceMappingURL=main.js.map