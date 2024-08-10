import React from "react";

import s from "./text.module.css";

interface Props {
  children: React.ReactNode;
}

export const text = {
  strong: s.strong as string,
  p: s.p as string,
  break: s.break as string,
  big: s.big as string,
  // ===
  normal: s.normal as string,
  muted: s.muted as string,
  highlightStrong: s.highlightStrong as string,
  highlightWeak: s.highlightWeak as string,
  successStrong: s.successStrong as string,
  successWeak: s.successWeak as string,
  failureStrong: s.failureStrong as string,
  failureWeak: s.failureWeak as string,
};

export const Paragraph = ({ children }: Props): JSX.Element => (
  <p className={s.p}>{children}</p>
);

export const Strong = ({ children }: Props): JSX.Element => (
  <strong className={s.strong}>{children}</strong>
);

export const MutedDiv = ({ children }: Props): JSX.Element => (
  <div className={s.muted}>{children}</div>
);

export const MutedSpan = ({ children }: Props): JSX.Element => (
  <span className={s.muted}>{children}</span>
);
