/**
 * apps/web/src/shared/api/init.ts
 *
 * Web (Vite) инициализация:
 * - берём baseUrl из import.meta.env.VITE_API_URL
 * - вызываем общий initApiClient из packages/api-client
 */

import { initApiClient } from '@monorepo/api-client';

/**
 * В Vite переменные окружения должны начинаться с VITE_
 * Пример: VITE_API_URL=http://localhost:3001
 */
const baseUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

/**
 * Инициализируем клиент один раз.
 */
initApiClient(baseUrl);
