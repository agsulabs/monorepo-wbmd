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

import { client } from "./gen/client.gen";

/**
 * Инициализирует SDK-клиент.
 *
 * Важно:
 * - вызывать один раз при старте приложения
 * - baseUrl должен быть абсолютным, например:
 *   http://localhost:3001
 *   http://192.168.0.10:3001
 */
export function initApiClient(baseUrl: string) {
  /**
   * Нормализуем baseUrl: убираем слэш на конце,
   * чтобы не получать двойные слэши при склейке URL.
   */
  const normalized = baseUrl.replace(/\/+$/, "");

  /**
   * Применяем конфигурацию.
   * После этого все вызовы из sdk.gen.ts идут на этот baseUrl.
   */
  client.setConfig({
    baseUrl: normalized,
  });
}
