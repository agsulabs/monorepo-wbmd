# Dependencies Runbook

## Что уже настроено

- Dependabot
- CodeQL
- CI checks

Файлы:

- .github/dependabot.yml
- .github/workflows/codeql.yml
- .github/workflows/ci.yml

## Dependabot

Dependabot создаёт PR для:

- npm зависимостей
- GitHub Actions

Текущая частота:

- weekly

## Как обрабатывать Dependabot PR

1. открыть PR
2. посмотреть, что именно обновляется
3. проверить, нет ли major breaking changes
4. дождаться CI
5. при необходимости прогнать локальные проверки
6. смержить PR

## На что смотреть особенно внимательно

- react-native и связанные native пакеты
- nestjs
- инструменты генерации OpenAPI
- eslint/typescript
- tauri и build tooling

## CodeQL

CodeQL запускается:

- на push в main
- на pull_request
- по расписанию

## Если пришёл security alert или упал CodeQL

1. открыть alert или failed run
2. понять, это реальная проблема или false positive
3. если проблема реальная — исправить
4. открыть PR с фиксом
5. дождаться зелёного CI и CodeQL

## Базовое правило обновлений

- не тащить много рискованных major updates в один PR
- critical/security updates приоритетнее обычных
- backend API changes проверять вместе с snapshot и api-client generation

## Полезные команды

    gh pr checks <номер>
    gh pr view <номер>
    gh run list --workflow CI --limit 5
    gh run list --workflow CodeQL --limit 5
