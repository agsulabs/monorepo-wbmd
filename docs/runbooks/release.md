# Release Runbook

## Как работает release

Workflow: .github/workflows/release.yml

Release запускается по тегам вида:

- v\*

Пример:
v1.1.0

## Что делает release workflow

1. checkout с полной историей
2. install
3. проверяет, что тег стоит на коммите из main
4. lint
5. typecheck
6. test
7. smoke
8. создаёт GitHub Release

## Когда делать новый тег

- после merge изменений в main
- когда рабочее дерево чистое
- когда версия выбрана по SemVer

## SemVer

- PATCH: bugfix, мелкие исправления без нового публичного поведения
- MINOR: новое совместимое поведение
- MAJOR: ломающие изменения

## Порядок релиза

1. убедиться, что main синхронизирован с origin/main
2. убедиться, что git status чистый
3. выбрать новую версию
4. создать тег
5. отправить тег в origin
6. проверить Release workflow
7. проверить GitHub Release

## Команды

    git status -sb
    git tag --list --sort=-v:refname
    git tag v1.1.0
    git push origin v1.1.0
    gh run list --workflow Release --limit 5
    gh release view v1.1.0

## Если release не стартовал

Проверить:

- что тег имеет формат v\*
- что тег отправлен в origin
- что workflow release.yml есть в main

## Если release упал

Проверить, на каком шаге упал workflow:

- verify tag commit is on main
- lint
- typecheck
- test
- smoke
- create GitHub Release

## Правило

Релизный тег должен указывать только на коммит, который уже находится в main.
