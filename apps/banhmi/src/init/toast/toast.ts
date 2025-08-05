import { ToastPane, text, ToastPaneType, coreIcons } from "main/src/core";
import s from "./toast.module.css";
// import { Check, Warning2 } from "@banhmi/icon/solid";

ToastPane.types = {
  success: {
    // iconComponent: Check,
    iconComponent: coreIcons.check,
    className: s.success,
    iconCls: text.successWeak,
  } as ToastPaneType,
  failure: {
    // iconComponent: Warning2,
    iconComponent: coreIcons.error,
    className: s.failure,
    iconCls: text.failureWeak,
  } as ToastPaneType,
};

ToastPane.styles = {
  main: s.main,
};
