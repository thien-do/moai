import { ArgTypes } from "@storybook/react";
import { ComponentProps, ComponentType } from "react";

type DocsValue = false | "boolean" | object | "number";

type DocsGroup<CT extends ComponentType> = Partial<
  Record<keyof ComponentProps<CT>, DocsValue>
>;

type DocsGroups<CT extends ComponentType> = Record<string, DocsGroup<CT>>;

/**
 * Weird thing "InputType" is not exported,
 * so we have to use a prepared type to get it.
 */
type RawValue = ArgTypes<{ [key: string]: unknown }>[string];

/**
 * If our typing is right,
 * this should satisfy Meta<CT>["argTypes"].
 */
type RawGroup<CT extends ComponentType> = Partial<
  Record<keyof ComponentProps<CT>, RawValue>
>;

const transformValue = (value: DocsValue): RawValue => {
  switch (value) {
    case false:
      return { control: false };
    case "boolean":
      return { control: "boolean" };
    case "number":
      return { control: "number" };
  }

  if (Array.isArray(value)) {
    return {
      control: value.length < 5 ? "radio" : "select",
      options: value,
    };
  }

  const options = Object.keys(value);
  return {
    control: options.length < 5 ? "radio" : "select",
    mapping: value,
    options,
  };
};

export const docsMetaArgTypes = <CT extends ComponentType>(
  groups: DocsGroups<CT>,
): RawGroup<CT> => {
  type Prop = keyof ComponentProps<CT>;

  const rawGroup: RawGroup<CT> = {};

  Object.entries(groups).forEach((groupEntry) => {
    const [groupName, group] = groupEntry;

    Object.entries(group).forEach((entry) => {
      const [key, value] = entry;
      const raw: RawValue = {
        ...transformValue(value as DocsValue),
        table: { category: groupName },
      };
      rawGroup[key as Prop] = raw;
    });
  });

  return rawGroup;
};
