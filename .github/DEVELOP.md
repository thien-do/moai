# Develop

This guide describes how to setup a local development to work on Moai.

## Before you start

This guide is mainly for contributing code to Moai. For other types of contribution, see the [CONTRIBUTING](./CONTRIBUTING.md) guide.

This is a guide to develop Moai itself. For guides to use Moai, e.g. to create your web apps with it, see [docs.moaijs.com](https://docs.moaijs.com).

To understand the principles that drive the design and development of Moai, see the [Principles](https://docs.moaijs.com/?path=/docs/intro-principles--page) guide.

## Codebase overview

Moai is a [monorepo](https://classic.yarnpkg.com/en/docs/workspaces/) powered by Yarn. There are several projects:

| Path    | Project           | Framework   |
| ------- | ----------------- | ----------- |
| core    | [@moai/core]      | [Rollup]    |
| gallery | [@moai/gallery]   | [Rollup]    |
| docs    | [docs.moaijs.com] | [Storybook] |
| test    | Test suits        | [Jest]      |

The "test" and "docs" projects depend on "core" and "gallery" via symlinks. This means to run tests or start the docs site locally, you will need to start or build "core" and "gallery" first.

[@moai/core]: https://www.npmjs.com/package/@moai/core
[@moai/gallery]: https://www.npmjs.com/package/@moai/gallery
[docs.moaijs.com]: https://docs.moaijs.com
[storybook]: https://storybook.js.org
[jest]: https://jestjs.io
[next.js]: https://nextjs.org
[rollup]: https://rollupjs.org/guide/en/

## Development scripts

-   `yarn start-core`: watch and build @moai/core
-   `yarn start-gallery`: watch and build @moai/gallery
-   `yarn start-docs`: start docs.moaijs.com locally
-   `yarn test`: run the test suites

The full workflow is to have 4 terminal tabs, one for each command above. However, depend on your use cases, it may be simpler:

If you'd like to work on tests or docs, you don't need to start the "core" and "gallery", but only need to build them once using `yarn build-core` and `yarn build-gallery`. Then, you can `yarn start-docs` or `yarn test`.

If you'd like to work on the "core" project, which should be most of the time, then you don't need to start the "gallery" but only need to build them once using `yarn build-gallery`.
