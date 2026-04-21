# OpenAPI Runbook

## Где находится snapshot

packages/api-client/openapi.snapshot.json

## Какие скрипты используются

    pnpm -C packages/api-client openapi:fetch
    pnpm -C packages/api-client openapi:check
    pnpm -C packages/api-client generate

## Как работает проверка

1. CI поднимает backend
2. забирает /api-json
3. нормализует JSON
4. сравнивает результат со snapshot
5. затем генерирует api-client
6. если src/gen изменился, CI падает

## Когда нужно обновлять snapshot

- когда контракт backend изменился намеренно
- когда изменения в /api-json ожидаемые и проверены

## Порядок обновления

1. поднять или собрать backend
2. обновить snapshot
3. проверить diff snapshot
4. перегенерировать api-client
5. проверить diff в src/gen
6. закоммитить оба изменения вместе

## Команды

    pnpm -C packages/api-client openapi:fetch
    pnpm -C packages/api-client openapi:check
    pnpm -C packages/api-client generate

## Если CI упал на OpenAPI diff

Причина:

- backend контракт изменился
- snapshot не обновлён

Что делать:

- обновить snapshot
- проверить изменение контракта
- перегенерировать api-client
- закоммитить изменения

## Если CI упал на api-client sync

Причина:

- snapshot или backend уже изменились
- generated client не был обновлён

Что делать:

- выполнить generate
- закоммитить изменения в packages/api-client/src/gen

## Правило

Изменение backend API должно идти в одном PR вместе с:

- обновлением snapshot
- обновлением generated api-client
