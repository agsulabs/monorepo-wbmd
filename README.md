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
