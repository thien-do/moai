export interface TreeContainerProps {
	children?: React.ReactNode;
}

export const TreeContainer = (props: TreeContainerProps): JSX.Element => {
	return <div>{props.children}</div>;
};
