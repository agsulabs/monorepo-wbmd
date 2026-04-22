import { client } from './gen/client.gen';
/**
 * Общая инициализация API клиента для:
 * - web (Vite)
 * - desktop (Tauri + Vite)
 * - mobile (bare React Native)
 *
 * Вызывать один раз при старте приложения.
 */
export function initApiClient(baseUrl) {
    // Убираем завершающие слэши, чтобы не получать двойные "//" в URL.
    const normalized = baseUrl.replace(/\/+$/, '');
    client.setConfig({
        baseUrl: normalized,
    });
}
//# sourceMappingURL=init.js.map