# Contributing

Thank you for your interest in contributing to Moai! There are many ways to contribute, and we appreciate all of them:

- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Pull Requests](#pull-requests)
- [Documentation](#documentation)

## Before you start

To understand the principles that drive the design and development of Moai, see the [Principles](https://docs.moaijs.com/?path=/docs/intro-principles--page) guide.

To get in touch with us, see the [Get in touch](../README.md#get-in-touch) section in the README. Whether you are stuck, or unsure about something, or just want to ask questions, we're more than happy to hear and help you.

If you are just getting started with contributing open source (Thank you!), we recommend GitHub's [Open Source Guides](https://opensource.guide/how-to-contribute/) and Kent C. Dodds's [makeapullrequest.com]( https://makeapullrequest.com) to make yourself comfortable.

## Bug Reports

The recommended way to report bugs is to [create an issue](https://github.com/moaijs/moai/issues/new/choose) at Moai repo. You can also report bugs at [other communication channels](#). 

Please report bugs liberally. If you're not sure if something is a bug or not, feel free to file a bug anyway. We're more than happy to clarify them for you.

Before filing a bug, you can [search existing issues](https://github.com/moaijs/moai/issues), as someone else may already reported it. This is not required, and we won't mind if you accidentally file a duplicate report.

## Feature Requests

Requesting features is very much similar to reporting bugs: just [create an issue](https://github.com/moaijs/moai/issues/new/choose) to describe what do you want. You can request new components, or new features for existing components, or [even a new package](https://github.com/moaijs/moai/issues/233).

By all means, please request features liberally. Don't be afraid if it is not possible or does not make sense. We would love to discuss things like that in the issue.

## Pull Requests

We use [pull requests](https://help.github.com/articles/about-pull-requests/) to make changes to Moai, with the [fork-and-pull](https://docs.github.com/en/github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models#fork-and-pull-model) model for collaboration. Basically, you fork Moai, make changes in your fork, and [create a pull request](https://github.com/moaijs/moai/compare) back to Moai.

To test your changes, you will need to setup Moai's local development. To get started, see the [DEVELOP](./DEVELOP.md) guide.

After submitted, all pull requests are reviewed by Moai's maintainers and contributors. In fact, as a way to contribute, you are welcome to review others' PRs!

In addition to human's reviews, your PRs also run through several [automated checks](https://docs.github.com/en/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks). These including checks for code style and some super useful [preview deployments]( https://vercel.com/docs/platform/deployments#preview).

## Documentation

Documentation improvements are very welcome. We appreciate everything: a quick example, a link to clarify a term, or even typo fixes. 

Moai's documentation are just code in this repository. Documentation pull requests therefore follow the same process as other pull requests.

The source of [docs.moaijs.com](https://docs.moaijs.com) is largely under the "lib/docs" folder. You can find all guides and examples (i.e. "Story") here. The API references (i.e. "All Props" tables) are automatically generated from the component's source code (e.g. [button.ts](https://github.com/moaijs/moai/blob/main/lib/core/src/button/button.tsx)).

To test your documentation changes, you will need to setup Moai's local development. To get started, see the [DEVELOP](./DEVELOP.md) guide.
