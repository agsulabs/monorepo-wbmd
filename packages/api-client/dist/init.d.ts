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
/**
 * Инициализирует SDK-клиент.
 *
 * Важно:
 * - вызывать один раз при старте приложения
 * - baseUrl должен быть абсолютным, например:
 *   http://localhost:3001
 *   http://192.168.0.10:3001
 */
export declare function initApiClient(baseUrl: string): void;
//# sourceMappingURL=init.d.ts.map