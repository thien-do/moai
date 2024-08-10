import React from "react";
import { Input, InputStyle } from "../input/input";
import { outline } from "../outline/outline";
import { omit } from "../utils/omit";
import s from "./text-area.module.css";

export interface TextAreaSize {
  main: string;
}

const getClass = (props: TextAreaProps) => {
  const style = props.style ?? TextArea.styles.outset;
  const size = props.size ?? TextArea.sizes.medium;
  return [s.container, outline.normal, style.main, size.main].join(" ");
};

type HTMLTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface TextAreaProps extends Omit<HTMLTextAreaProps, "style"> {
  /**
   * Initial value of the input in uncontrolled mode.
   */
  defaultValue?: string;
  /**
   * Value of the input in controllerd mode
   */
  value?: string;
  /**
   * Handler to set the value in controlled mode
   */
  setValue?: (value: string) => void;
  /**
   * Style of the text box. Choose one from `TextArea.styles` for example: `TextArea.styles.flat`. Same default as the "Input" component.
   */
  style?: InputStyle;
  /**
   * Size of the text box. Choose one from `TextArea.sizes` for example: `TextArea.size.medium`. Same default as the "Input" component.
   */
  size?: TextAreaSize;
  /**
   * The [HTML `onchange`][1] event handler.
   *
   * Note that you should not need to use onChange! This exists only for
   * compatibility with 3rd-party libraries (those that passing props to a
   * custom rendered component). You should use `setValue` most of the time.
   *
   * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

// This is actually ReturnType<typeof forwardRef>, but we don't know how to
// provide the type parameter to forwardRef. This is required to re-type the
// Input component so that we can attach "Input.sizes" and "Input.styles"
type TextAreaPropsWithRef = TextAreaProps &
  React.RefAttributes<HTMLTextAreaElement>;

// Re-type the Input component since React's forwardRef returned type cannot
// be extended with property like "Button.sizes"
interface TextAreaComponent
  extends React.ForwardRefExoticComponent<TextAreaPropsWithRef> {
  sizes: { medium: TextAreaSize; small: TextAreaSize };
  styles: { outset: InputStyle; flat: InputStyle };
}

const renderTextArea = (
  props: TextAreaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
): JSX.Element => {
  const rawProps = omit(props, [
    "className",
    "style",
    "size",
    "defaultValue",
    "value",
    "setValue",
    "onChange",
  ]);

  return (
    <textarea
      {...rawProps}
      ref={ref}
      defaultValue={props.defaultValue}
      value={props.value}
      onChange={(event) => {
        props.onChange?.(event);
        props.setValue?.(event.currentTarget.value);
      }}
      className={getClass(props)}
    />
  );
};

export const TextArea = React.forwardRef(renderTextArea) as TextAreaComponent;

TextArea.styles = {
  outset: Input.styles.outset,
  flat: Input.styles.flat,
};

TextArea.sizes = {
  medium: { main: s.medium } as TextAreaSize,
  small: { main: s.small } as TextAreaSize,
};
