import { Meta } from "@storybook/react";
import { useCallback, useState } from "react";
import { Pagination } from "../../core/src";
import { Utils } from "./utils";

const meta: Meta = {
	title: "Components/Pagination",
	component: Pagination,
};

Utils.page.component(meta, { sticky: true, shots: [] });

export default meta;

export const Primary = (): JSX.Element => {
	const [page, setPage] = useState(1);
	return <Pagination value={page} setValue={setPage} max={10} min={1} />;
};

export const Basic = Primary;

Utils.desc(Basic)(`
Paginations are [controlled][1] components. You should maintain a [state][2]
for the current page, and pass the control to a Pagination via its \`value\`
and \`setValue\` props. A Pagination helps users go to any page between its
\`min\` and \`max\` props, inclusive.

[1]: https://reactjs.org/docs/forms.html#controlled-components
[2]: https://reactjs.org/docs/hooks-state.html
`);

export const Async = (): JSX.Element => {
	const [page, setPage] = useState(1);
	const setPageAsync = useCallback((page): Promise<void> => {
		return new Promise((resolve) => {
			setPage(page);
			window.setTimeout(() => resolve(), 1000);
		});
	}, []);
	return <Pagination value={page} setValue={setPageAsync} max={10} min={1} />;
};

Utils.desc(Async)(`
Commonly, you may need to fetch some data when users navigate to a new
page. In these cases, return a [\`Promise\`][1] in the \`setValue\` callback to
have the Pagination displays a loading state while waiting for data.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
`);
