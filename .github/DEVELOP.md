# Develop

This guide describes how to setup a local development to work on Moai.

## Before you start

This guide is mainly for contributing code to Moai. For other types of contribution, see the [CONTRIBUTING](./CONTRIBUTING.md) guide.

This is a guide to develop Moai itself. For guides to use Moai, e.g. to create your web apps with it, see [docs.moaijs.com](https://docs.moaijs.com).

To understand the principles that drive the design and development of Moai, see the [Principles](https://docs.moaijs.com/?path=/docs/intro-principles--page) guide.

## Codebase overview

|Path        |Project             |Framework    |
|------------|--------------------|--------------|
|lib/core    | [@moai/core]      | [Rollup]     |
|lib/gallery | [@moai/gallery]   | [Rollup]     |
|lib/docs    | [docs.moaijs.com] | [Storybook]  |
|site        | [moaijs.com]      | [Next.js]    |

## Local Development

To have a local development environment, go to the "lib/docs" folder and run `yarn start`:

```
cd lib/docs
yarn start
```

Note that you don't need to run `yarn` first. We intentionally prefixed `yarn start` with `yarn` to ensure you always work on the correct dependencies.

This simply runs the docs site locally so you can review your changes. It imports components directly from "lib/core" so changes you made there will be applied immediately.

### Moai's Website

The source code of Moai's website ([moaijs.com]) is under the "site" folder. To work on it, go to the folder and execute `yarn dev`. This installs all dependencies and start a development server at [localhost:3000](http://localhost:3000):

```sh
cd site
yarn dev
```

Note that the "site" project **does not** import Moai's components from the "lib" folder of the codebase. Instead, it installs Moai's (published) packages as normal npm dependencies.

This means you won't see changes you made in "lib/core" when working on the "site" project. Instead, you should publish your changes in "lib", then install the new version here in "site".

[@moai/core]: https://www.npmjs.com/package/@moai/core
[@moai/gallery]: https://www.npmjs.com/package/@moai/gallery
[docs.moaijs.com]: https://docs.moaijs.com
[moaijs.com]: https://moaijs.com
[Storybook]: https://storybook.js.org
[Next.js]: https://nextjs.org
[Rollup]: https://rollupjs.org/guide/en/
