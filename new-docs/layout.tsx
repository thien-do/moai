import { ReactElement, ReactNode } from "react";

/**
 * Moai components require className "light" for styling so we create a custom
 * layout that wrap outside all documents with className "light"
 * https://vocs.dev/docs/structure#layout-component
 */
export default function Layout(props: { children: ReactNode }): ReactElement {
	return <div className="light">{props.children}</div>;
}
