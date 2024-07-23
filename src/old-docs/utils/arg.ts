const argControl = (target: unknown) => {
  if (target === null) {
    return { type: null };
  } else if (Array.isArray(target)) {
    const type = target.length > 4 ? "select" : "radio";
    return { type, options: target };
  } else if (typeof target === "object") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options = Object.keys(target as any);
    const type = options.length > 4 ? "select" : "radio";
    return { type, options };
  } else {
    return { type: target };
  }
};

/**
 * @todo Add return type
 */
export const utilsArg = (target: unknown, category?: string) => {
  const table = category ? { category } : undefined;
  const control = argControl(target);
  // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-controloptions
  const options = control.options;
  delete control.options;
  return { options, control, table };
};
