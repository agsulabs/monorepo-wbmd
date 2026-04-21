# Contributing

Thank you for contributing to this monorepo.

## Project Structure

This repository uses `pnpm` workspaces and `Turborepo`.

Main workspaces:

- `apps/web` — React + Vite
- `apps/mobile` — React Native (bare)
- `apps/desktop` — Tauri + React
- `apps/backend` — NestJS
- `packages/api-client` — generated API client
- `packages/contracts` — shared contracts

Internal package scope:

- `@monorepo/*`

## Requirements

Recommended local environment:

- Node.js 20+
- pnpm 9+
- Git

## Install

Run:

`pnpm install`

## Common Commands

### Run checks for the whole monorepo

- `pnpm -w lint`
- `pnpm -w typecheck`
- `pnpm -w test`
- `pnpm smoke`

### Run app-specific commands

Use workspace filters when needed.

Examples:

- `pnpm --filter @monorepo/backend dev`
- `pnpm --filter @monorepo/web dev`
- `pnpm --filter @monorepo/mobile test`
- `pnpm --filter @monorepo/desktop build`

## Branching and Pull Requests

- Create a dedicated branch for each change
- Open a pull request into `main`
- Do not push directly to `main`
- Make sure required checks pass before merge

Preferred branch naming examples:

- `feat/...`
- `fix/...`
- `docs/...`
- `chore/...`

## Pull Request Expectations

Before opening a PR, run locally when relevant:

- `pnpm -w lint`
- `pnpm -w typecheck`
- `pnpm -w test`
- `pnpm smoke`

Also make sure:

- documentation is updated if behavior changed
- runbooks are updated if operational flow changed
- generated artifacts are committed when required

## API / OpenAPI Changes

If backend API changes:

1. update backend code
2. refresh OpenAPI snapshot
3. regenerate `packages/api-client`
4. commit generated changes

Useful commands:

- `pnpm openapi:fetch`
- `pnpm openapi:check`
- `pnpm --filter @monorepo/api-client generate`

If the generated client is out of date, CI will fail.

## CI Expectations

CI validates:

- install
- lint
- typecheck
- test
- smoke
- backend runtime health
- OpenAPI snapshot consistency
- backend ↔ api-client sync
- security analysis

Do not merge changes that break any required check.

## Commit Style

Keep commits focused and small.

Examples:

- `feat(web): add dashboard shell`
- `fix(backend): handle invalid health response`
- `docs: update release runbook`

## Security

Do not report vulnerabilities in public issues.

See `SECURITY.md` for the security reporting policy.

## Releases

Releases are created from version tags:

- `v*`

Release workflow verifies the tag points to a commit reachable from `main`.

## Notes

When changing repository-wide tooling or conventions:

- update `README.md` if needed
- update relevant files in `docs/runbooks/`
- keep changes consistent across all affected apps/packages
