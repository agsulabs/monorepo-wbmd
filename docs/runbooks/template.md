# Starter Template Runbook

This document explains how to turn this repository into a reusable starter template.

## Goal

Use this monorepo as a starting point for a new project without leaking old names, scopes, URLs, or environment assumptions.

## Rename Checklist

When creating a new project from this repository, review and update the following:

### Repository metadata

- repository name
- GitHub org/user references
- issue templates contact links
- `CODEOWNERS`
- `LICENSE` copyright holder
- `README.md`
- `SUPPORT.md`
- `CONTRIBUTING.md`

### Package scope and package names

Current internal scope:

- `@monorepo/*`

Update as needed in:

- root `package.json`
- `apps/*/package.json`
- `packages/*/package.json`
- import paths across the repo
- lockfile if regenerated

### App identifiers

Review and update platform-specific identifiers.

#### Web

- app title
- metadata
- any hardcoded API URLs

#### Backend

- service name
- CORS allowlist
- Swagger metadata
- environment variable defaults
- port assumptions if needed

#### Mobile

- Android application id
- iOS bundle identifier
- app display name
- env variable names if project-specific

#### Desktop

- Tauri product name
- Tauri bundle identifier
- window title
- updater configuration if added later

## Files and Areas to Review

Review these locations carefully:

- `README.md`
- `CONTRIBUTING.md`
- `SUPPORT.md`
- `SECURITY.md`
- `.github/`
- `apps/web/`
- `apps/mobile/`
- `apps/desktop/`
- `apps/backend/`
- `packages/api-client/`
- `packages/contracts/`
- `docs/runbooks/`

## CI/CD Review

Before publishing a derived project, verify:

- GitHub Actions workflow names still make sense
- branch protection rules match the new repo
- release workflow matches the intended versioning flow
- Dependabot targets the correct ecosystem paths
- CodeQL is still enabled and relevant
- OpenAPI snapshot flow matches the backend contract policy

## Secrets and Environment Review

Make sure no project-specific values are carried over unintentionally.

Review:

- `.env.example` files
- workflow environment variables
- API base URLs
- local development URLs
- release settings
- signing or publishing configuration if added later

## API Client and Contract Review

If backend contracts change in the new project:

- refresh OpenAPI snapshot
- regenerate `packages/api-client`
- commit generated changes
- confirm CI still checks contract drift correctly

## Validation Checklist for a New Template Consumer

After renaming and configuration updates, run:

- `pnpm install`
- `pnpm -w lint`
- `pnpm -w typecheck`
- `pnpm -w test`
- `pnpm smoke`

Also verify:

- backend starts correctly
- `/health` works
- `/api` works
- `/api-json` works
- web starts
- mobile tests pass
- desktop UI builds

## Recommendation

Keep this repository production-ready first and template-ready second.

Only generalize or remove project-specific details when it improves reuse without making the current repository worse to operate.
