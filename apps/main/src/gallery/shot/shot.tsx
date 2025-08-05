import React from "react";
import s from "./shot.module.css";

interface Props {
  children: React.ReactNode;
}

export const Shot = (props: Props): JSX.Element => (
  <div className={s.container} children={props.children} />
);
