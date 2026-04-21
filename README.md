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
- pnpm smoke
- pnpm -w dev

## CI

GitHub Actions runs:

- install (frozen lockfile)
- lint
- typecheck
- test
- smoke
- backend runtime health check
- OpenAPI snapshot check
- api-client sync check

## Security and Maintenance

Configured:

- Dependabot
- CodeQL
- branch protection for main
- required checks for merge

## Versioning (SemVer)

Versioning follows SemVer: MAJOR.MINOR.PATCH

- PATCH
  - bug fixes
  - no breaking API or contract changes

- MINOR
  - new backward-compatible behavior

- MAJOR
  - breaking changes
  - requires client updates

## Changelog Policy

- Every PR should update CHANGELOG.md
- Releases are created from version tags: v\*

## OpenAPI Contract Rules

- Backend API (/api-json) is treated as a contract
- Any API change must update:
  - packages/api-client/openapi.snapshot.json
  - packages/api-client/src/gen
- CI fails if the snapshot changed but was not updated
- CI fails if api-client generation is out of date

## Release

- Releases are created by pushing tags like v1.1.0
- Release workflow verifies that the tagged commit belongs to main
- Release workflow runs lint, typecheck, test, and smoke before creating a GitHub Release

## Runbooks

- docs/runbooks/ci.md
- docs/runbooks/openapi.md
- docs/runbooks/release.md
- docs/runbooks/dependencies.md
