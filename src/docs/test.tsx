import { ReactElement } from "react";

export const Test = (props: { label: string }): ReactElement => {
  const { label } = props;
  return <div>Test {label}</div>;
};
