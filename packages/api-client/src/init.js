"use strict";
/**
 * packages/api-client/src/init.ts
 *
 * Общая функция инициализации API клиента для всех приложений:
 * - web (Vite)
 * - desktop (Tauri + Vite)
 * - mobile (Expo)
 *
 * Что делает:
 * - один раз задаёт baseUrl в client.setConfig(...)
 *
 * Зачем:
 * - чтобы не дублировать client.setConfig(...) в каждом приложении
 * - чтобы у всех платформ был одинаковый паттерн подключения
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApiClient = initApiClient;
var client_gen_1 = require("./gen/client.gen");
/**
 * Инициализирует SDK-клиент.
 *
 * Важно:
 * - вызывать один раз при старте приложения
 * - baseUrl должен быть абсолютным, например:
 *   http://localhost:3001
 *   http://192.168.0.10:3001
 */
function initApiClient(baseUrl) {
    /**
     * Нормализуем baseUrl: убираем слэш на конце,
     * чтобы не получать двойные слэши при склейке URL.
     */
    var normalized = baseUrl.replace(/\/+$/, "");
    /**
     * Применяем конфигурацию.
     * После этого все вызовы из sdk.gen.ts идут на этот baseUrl.
     */
    client_gen_1.client.setConfig({
        baseUrl: normalized,
    });
}
