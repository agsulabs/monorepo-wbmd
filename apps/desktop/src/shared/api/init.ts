// apps/desktop/src/shared/api/init.ts
//
// Desktop-инициализация API клиента.
// Идея: один раз при старте приложения задаём baseUrl для всего SDK,
// чтобы дальше в коде просто вызывать функции из @monorepo/api-client,
// без client.setConfig(...) и без дублирования по проекту.

import { initApiClient } from '@monorepo/api-client';

// Vite читает env только с префиксом VITE_
// Если переменная не задана — используем безопасный дефолт для dev.
const baseUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:3001';

// Инициализируем SDK один раз.
// После этого все вызовы из gen/sdk.gen.ts будут ходить на этот baseUrl.
initApiClient(baseUrl);
