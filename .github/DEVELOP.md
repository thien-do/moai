# Develop

This guide describes how to setup a local development to work on Moai.

## Before you start

This guide is mainly for contributing code to Moai. For other types of contribution, see the [CONTRIBUTING](./CONTRIBUTING.md) guide.

This is a guide to develop Moai itself. For guides to use Moai, e.g. to create your web apps with it, see [moai.thien.do](https://moai.thien.do).

To understand the principles that drive the design and development of Moai, see the [Principles](https://moai.thien.do/?path=/docs/intro-principles--page) guide.

## Codebase overview

Moai is a [monorepo](https://classic.yarnpkg.com/en/docs/workspaces/) powered by Yarn. There are several projects:

| Path    | Project         | Framework   |
| ------- | --------------- | ----------- |
| core    | [@moai/core]    | [Rollup]    |
| gallery | [@moai/gallery] | [Rollup]    |
| docs    | [moai.thien.do] | [Storybook] |
| test    | Test suits      | [Jest]      |

The "test" and "docs" projects depend on "core" and "gallery" via symlinks. This means to run tests or start the docs site locally, you will need to build "core" and "gallery" first. Also, the "gallery" depends on the "core" project:

```
├─ docs
│    ├─ gallery
│    └─ core
├─ test
│    └─ core
├─ gallery
│    └─ core
└─ core
```

[@moai/core]: https://www.npmjs.com/package/@moai/core
[@moai/gallery]: https://www.npmjs.com/package/@moai/gallery
[moai.thien.do]: https://moai.thien.do
[storybook]: https://storybook.js.org
[jest]: https://jestjs.io
[next.js]: https://nextjs.org
[rollup]: https://rollupjs.org/guide/en/

## Development scripts

- `yarn start-core`: watch and build @moai/core
- `yarn start-gallery`: watch and build @moai/gallery
- `yarn start-docs`: start moai.thien.do locally
- `yarn test`: run the test suites

The typical workflow is to have 4 terminal tabs, one for each command above. However, depend on your use cases, you may not need to "watch" some projects, but only "build" them once.

Note the dependency of these projects. In general, start "core" first, then "gallery", then "docs".
