# Backend Runbook

## Что уже настроено

- startup logs
- bootstrap error handling
- graceful shutdown hooks
- request logging
- Swagger UI: /api
- OpenAPI JSON: /api-json
- health endpoint: /health

## Основные адреса

- http://localhost:3001/health
- http://localhost:3001/api
- http://localhost:3001/api-json

## Как запустить локально

    pnpm -C apps/backend dev

или

    pnpm -C apps/backend build
    node apps/backend/dist/main.js

## Что видно в логах

При старте backend пишет:

- адрес backend
- адрес health
- адрес Swagger UI
- адрес OpenAPI JSON

Для каждого запроса backend пишет:

- HTTP method
- URL
- status code
- duration in ms

Пример:
GET /health 200 - 5ms

## Если backend не стартует

Что проверить:

- занят ли порт 3001
- собирается ли backend без ошибок
- нет ли ошибки в bootstrap

Полезные команды:
pnpm -C apps/backend build
lsof -nP -iTCP:3001 -sTCP:LISTEN

## Если порт 3001 уже занят

Найти процесс:
lsof -nP -iTCP:3001 -sTCP:LISTEN

Остановить процесс:
kill <PID>

## Health check

Проверка:
curl -fsS http://127.0.0.1:3001/health

Ожидаемый ответ:
{"ok":true}

## Правило

Любые изменения runtime backend должны сохранять:

- рабочий /health
- рабочий /api-json
- понятные startup logs
- явное поведение при ошибке старта
