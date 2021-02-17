# Moai UI Kit - [moaijs.com](https://moaijs.com)

## Getting started

### Core

1. Install the package:

```
yarn add @moai/core
```

2. Import global CSS:

```tsx
import "@moai/core/dist/index.css";
import "@moai/core/dist/font/remote.css";
```

3. Import components to use:

```tsx
import { Button } from "@moai/core";

export const Foo = (): JSX.Element => (
	<Button>Hello</Button>
);
```

### Icon

1. Install the package:

```
yarn add @moai/icon
```

2. Import icons from each set to use:

```tsx
import { Bell } from "@moai/icon/hrs";

export const Foo = (): JSX.Element => (
	<Button icon={Bell}>Hello</Button>
);
```
