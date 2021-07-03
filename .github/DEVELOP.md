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

## Local Development

To have a local development environment, run `yarn start`:

```
yarn start
```

Note that you don't need to run `yarn` first. We intentionally prefixed `yarn start` with `yarn` to ensure you always work on the correct dependencies.

This simply runs the docs site locally so you can review your changes. It imports components directly from "core" so changes you made there will be applied immediately.

[@moai/core]: https://www.npmjs.com/package/@moai/core
[@moai/gallery]: https://www.npmjs.com/package/@moai/gallery
[docs.moaijs.com]: https://docs.moaijs.com
[moaijs.com]: https://moaijs.com
[storybook]: https://storybook.js.org
[next.js]: https://nextjs.org
[rollup]: https://rollupjs.org/guide/en/
