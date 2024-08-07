import { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { Button, Checkbox } from "../core";
import { Book, someBooks } from "../old-docs/utils/example";
import { docsMetaParameters } from "./utils/parameter";
import { docsMetaArgTypes } from "./utils/arg-type";

const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: docsMetaParameters({}),
  argTypes: docsMetaArgTypes({
    Visual: {
      checked: "boolean",
      indeterminate: "boolean",
      disabled: "boolean",
    },
    Controlled: {
      children: false,
      setChecked: false,
    },
    Uncontrolled: {
      defaultChecked: false,
      forwardedRef: false,
    },
  }),
};

export default meta;

export const Primary: StoryObj<typeof Checkbox> = {
  render: (props) => <Checkbox {...props} children="Checkbox" />,
};

/**
 * Checkbox is a [controlled][1] component.
 * You should have a boolean [state][2] for the checked state,
 * and give its control to a checkbox via the `checked` and `setChecked` props.
 * 
 * [1]: https://reactjs.org/docs/forms.html#controlled-components
 * [2]: https://reactjs.org/docs/hooks-state.html
 */
export const Basic = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        checked={checked}
        setChecked={setChecked}
        children="Subscribe to newsletter"
      />
    );
  },
};

/**
 * Moai checkboxes support the [indeterminate][1] state.
 * It's recommended to set this state in JavaScript, like when using the HTML `checkbox`.
 * This is done by having a [reference][2] to the checkbox via the `forwardedRef`.
 * 
 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
 * [2]: https://reactjs.org/docs/refs-and-the-dom.html
 */
export const IndeterminateImperative = {
  name: "Indeterminate (Imperative)",
  render: () => {
    const ref = useRef<HTMLInputElement>(null);
    const toggle = () => {
      const input = ref.current;
      if (input === null) throw Error("Input is null");
      input.indeterminate = !input.indeterminate;
    };
    return (
      <div>
        <Button onClick={toggle} children="Toggle indeterminate" />
        <div style={{ height: 8 }} />
        <Checkbox forwardedRef={ref} children="Select all" />
      </div>
    );
  },
};

/**
 * Moai also supports having the indeterminate state delacratively, via the `indeterminate` prop,
 * where it does [the imperative work][1] for you.
 * However, this should be considered experimental.
 * See the [List][2] section below for a full example.
 * 
 * [1]: https://github.com/moaijs/moai/blob/5ff5ee97d594954b160b375a984e9f44bfb34f9a/lib/core/src/checkbox/checkbox.tsx#L69-L74
 * [2]: #list
 */
export const IndeterminateDeclarative = {
  name: "Indeterminate (Declarative)",
  render: () => <Checkbox indeterminate={true} children="Select all" />,
};

/**
 * To have a group of checkboxes, render them with `map` and `key` [as usual][1].
 * The type of your state is up to you: a `Map` of boolean values, a `Set` of ids, or just an array:
 * 
 * [1]: https://reactjs.org/docs/lists-and-keys.html
 */
export const Group = {
  render: () => {
    const [books, setBooks] = useState<Book["isbn"][]>([someBooks[0].isbn]);

    const toggle = (isbn: Book["isbn"]): void => {
      const selected = books.includes(isbn);
      const next = selected
        ? books.filter((i) => i !== isbn)
        : books.concat(isbn);
      setBooks(next);
    };

    const renderBook = (book: Book): JSX.Element => (
      <li key={book.isbn} style={{ marginLeft: 8 }}>
        <Checkbox
          checked={books.includes(book.isbn)}
          setChecked={() => toggle(book.isbn)}
          children={book.title}
        />
      </li>
    );

    return (
      <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Checkbox
          checked={books.length === someBooks.length}
          setChecked={(checked) => {
            setBooks(checked ? someBooks.map((b) => b.isbn) : []);
          }}
          indeterminate={books.length > 0 && books.length !== someBooks.length}
          children="Select all"
        />
        {someBooks.map(renderBook)}
      </ul>
    );
  },
};

/**
 * The `children` prop of Checkbox accepts `ReactNode`
 * but intentionally excludes the falsy values (e.g. `false`, `null`, `undefined`).
 * This ensures your checkboxes always have accessible labels,
 * even if the labels are not _displayed_.
 * 
 * To hide the label of a checkbox, set its `hideLabel` prop to `true`.
 * You'll still need to define a label at the `children` prop.
 * Sighted users won't see the label, but screen readers will announce it for unsighted users.
 * 
 * This should be used where the surrounding context can visually tell your sighted users about the meaning of the checkboxes.
 * A common use case is to have a checkbox for each row of a table.
 * In fact, for a real-life example,
 * see the [`selectable`][1] section of the Table component.
 * 
 * [1]: /docs/components-table--selectable-multiple
 */
export const WithoutLabel = {
  render: () => <Checkbox hideLabel>Sample checkbox</Checkbox>,
};
