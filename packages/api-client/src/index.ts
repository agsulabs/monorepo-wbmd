/**
 * packages/api-client/src/index.ts
 *
 * Публичный API пакета:
 * - экспорты автоген файлов
 * - плюс ручные помощники (init)
 */

export * from "./gen/types.gen";
export * from "./gen/sdk.gen";
export * from "./gen/client.gen";

/**
 * Ручной helper для инициализации клиента (НЕ автоген).
 */
export * from "./init";
