# CI Runbook

## Что проверяет CI

Workflow: .github/workflows/ci.yml

Основные шаги:

1. install
2. lint
3. typecheck
4. test
5. smoke
6. backend start
7. OpenAPI snapshot check
8. api-client sync check

## Smoke

Команда:
pnpm smoke

Что входит:

- backend build
- web build
- desktop ui build
- mobile typecheck
- mobile test

## OpenAPI contract

CI:

- поднимает backend
- забирает /api-json
- сравнивает с packages/api-client/openapi.snapshot.json

Если snapshot изменился:

- нужно обновить snapshot
- проверить, что изменение ожидаемое
- закоммитить обновление

## api-client sync

После проверки OpenAPI CI:

- запускает pnpm -C packages/api-client generate
- проверяет diff в packages/api-client/src/gen

Если CI падает с сообщением:
api-client is out of date. Run generate and commit changes

Нужно выполнить:
pnpm -C packages/api-client generate
git add packages/api-client/src/gen
git commit -m "chore(api-client): regenerate client"

## Частые причины падения CI

### 1. OpenAPI diff

Причина:

- backend контракт изменился
- snapshot не обновлён

### 2. api-client out of date

Причина:

- backend или snapshot обновили
- generated client не обновили

### 3. smoke failure

Причина:

- build, typecheck или test в одном из apps сломаны

## Базовый порядок действий при падении CI

1. Открыть упавший job
2. Найти точный шаг падения
3. Исправить локально
4. Прогнать локально нужную команду
5. Закоммитить фикс
6. Обновить PR

## Полезные команды

    pnpm -w lint
    pnpm -w typecheck
    pnpm -w test
    pnpm smoke
    pnpm -C packages/api-client openapi:fetch
    pnpm -C packages/api-client openapi:check
    pnpm -C packages/api-client generate
