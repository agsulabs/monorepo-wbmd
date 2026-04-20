# Changelog

Все заметные изменения в этом репозитории фиксируются в этом файле.

Формат основан на Keep a Changelog.
Версионирование: SemVer.

## [Unreleased]

### Added

- PR gate для main: required check `checks`, запрет прямого push, conversation resolution, linear history.
- Базовые архитектурные guardrails в ESLint: запрет deep imports для `@monorepo/api-client/*` и `@monorepo/contracts/*`, запрет app-to-app imports.
- Реальный lint для apps/web, apps/backend, packages/api-client, packages/contracts.

### Changed

- apps/web lint переведён с заглушки на `eslint .`
- apps/backend lint переведён с заглушки на `eslint .`
- packages/api-client lint переведён с заглушки на `eslint .`
- packages/contracts lint переведён с заглушки на `eslint .`

## [1.0.0] - 2026-02-08

### Added

- Первый стабильный v1 monorepo milestone.
- pnpm workspaces + Turborepo monorepo.
- apps: web, backend, mobile, desktop.
- packages: contracts, api-client.
- OpenAPI endpoint `/api-json` и Swagger UI `/api`.
- Сгенерированный SDK в `packages/api-client`.
- Базовый CI: lint, typecheck, test.
