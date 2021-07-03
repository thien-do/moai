# Develop

This guide describes how to setup a local development to work on Moai.

## Before you start

This guide is mainly for contributing code to Moai. For other types of contribution, see the [CONTRIBUTING](./CONTRIBUTING.md) guide.

This is a guide to develop Moai itself. For guides to use Moai, e.g. to create your web apps with it, see [docs.moaijs.com](https://docs.moaijs.com).

To understand the principles that drive the design and development of Moai, see the [Principles](https://docs.moaijs.com/?path=/docs/intro-principles--page) guide.

## Codebase overview

| Path    | Project           | Framework   |
| ------- | ----------------- | ----------- |
| core    | [@moai/core]      | [Rollup]    |
| gallery | [@moai/gallery]   | [Rollup]    |
| docs    | [docs.moaijs.com] | [Storybook] |
| test    | Test suits        | [Jest]      |

[@moai/core]: https://www.npmjs.com/package/@moai/core
[@moai/gallery]: https://www.npmjs.com/package/@moai/gallery
[docs.moaijs.com]: https://docs.moaijs.com
[storybook]: https://storybook.js.org
[jest]: https://jestjs.io
[next.js]: https://nextjs.org
[rollup]: https://rollupjs.org/guide/en/

## Development scripts

-   `yarn core`: watch and build @moai/core
-   `yarn docs`: start docs.moaijs.com locally
-   `yarn test`: run the test suites

"docs" and "test" both rely on the output of "core"'s build, so in most cases you will need:

-   a terminal to run `yarn core`, and
-   a terminal to run `yarn docs` or `yarn test`
