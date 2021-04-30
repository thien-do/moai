import React from "react";
import { text } from "../text/text";

interface Props {
	children?: React.ReactNode;
}

export const FormError = ({ children }: Props): JSX.Element => (
	<div className={text.failureStrong} children={children} />
);
