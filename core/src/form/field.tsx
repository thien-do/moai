import s from "./field.module.css";
import { DivPx } from "../div/div";
import { createElement } from "react";
import { InputProps } from "../input/input";

interface Props {
    label?: React.ReactNode;
    children:
    | string
    | React.ComponentType<any>
    | React.ComponentType
    | React.ForwardRefExoticComponent<any>;
    useLabelTag?: boolean;
    labelWidth?: number;

    // formik
    name?: string;
    value?: string;
    onChange?: (field: any) => void;
    onBlur?: (field: any) => void;
    errorOutput?: string | React.ReactNode;

    // ref
    innerRef?: (instance: any) => void;
}

export const FormField: React.FC<Props & InputProps> = (props) => {
    const {
        label,
        children,
        useLabelTag,
        labelWidth,
        errorOutput,
        innerRef,
        ...rest
    } = props;
    const labelStyle = { width: labelWidth ?? "auto" };

    return createElement(
        useLabelTag ? "label" : "div",
        { className: s.container },
        <span className={s.label} style={labelStyle}>
            {label}
        </span>,
        <DivPx size={8} />,
        <span className={s.input}>
            {createElement(
                children,
                {
                    ref: typeof children === "string"
                        ? innerRef
                        : null,
                    ...rest
                }
            )}
        </span>,
        errorOutput
    );
};
