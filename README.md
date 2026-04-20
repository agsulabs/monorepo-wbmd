# Monorepo

pnpm workspaces + Turborepo monorepo.

## Structure

- apps/
  - web (Vite + React)
  - backend (NestJS + Swagger /api, OpenAPI JSON /api-json)
  - mobile (bare React Native, no Expo)
  - desktop (Tauri + React)
- packages/
  - contracts (shared DTO/types)
  - api-client (generated SDK from backend OpenAPI)

## Requirements

- Node: 20.11.0 (see .nvmrc)
- pnpm: 9.x (see package.json packageManager)

## Setup

- Enable Corepack:
  - corepack enable
- Install:
  - pnpm -w install

## Common commands (root)

- pnpm -w lint
- pnpm -w typecheck
- pnpm -w test
- pnpm -w dev

## CI

GitHub Actions runs install (frozen lockfile) + lint + typecheck + test.

## Versioning (SemVer)

Версионирование следует SemVer: MAJOR.MINOR.PATCH

- PATCH (x.x.1)
  - багфиксы
  - не ломает API и контракты

- MINOR (x.1.0)
  - новая функциональность
  - обратная совместимость сохраняется

- MAJOR (1.0.0 → 2.0.0)
  - любые изменения, ломающие API или контракты
  - требует обновления клиентов (web/mobile/desktop)

## Changelog Policy

- Каждый PR должен добавлять запись в `CHANGELOG.md` (раздел Unreleased)
- При релизе:
  - создаётся новая версия
  - изменения переносятся из Unreleased в новую секцию версии

## OpenAPI Contract Rules

- Backend API (`/api-json`) считается контрактом
- Любое изменение API:
  - должно обновить `api-client`
  - должно обновить `openapi.snapshot.json`
- CI упадёт, если контракт изменился без обновления snapshot
