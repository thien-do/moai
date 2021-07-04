import { Meta } from "@storybook/react";
import { useCallback, useState } from "react";
import { Pagination } from "@moai/core";
import { Utils } from "../utils/utils";

const meta: Meta = {
	title: "Components/Pagination",
	component: Pagination,
};

Utils.page.component(meta, { primary: "none", shots: [] });

export default meta;

export const Primary = (): JSX.Element => {
	const [page, setPage] = useState(1);
	return <Pagination value={page} setValue={setPage} max={10} min={1} />;
};

export const Basic = Primary;

Utils.story(Basic, {
	desc: `
Pagination is a [controlled][1] component. You should maintain a number
[state][2] for the current page, and pass the control to a pagination via its
\`value\` and \`setValue\` props. It also requires the \`min\` and \`max\`
props (inclusive) to define the range of pages users can go to.

[1]: https://reactjs.org/docs/forms.html#controlled-components
[2]: https://reactjs.org/docs/hooks-state.html
`,
});

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

Utils.story(Async, {
	desc: `
You may need to fetch some new data when users navigate to a new page. In these
cases, return a [\`Promise\`][1] in the \`setValue\` callback to have the
pagination displays a loading state while waiting for data.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
`,
});

export const Counting = (): JSX.Element => {
	// Zero-based API
	const TOTAL_PAGES = 9;
	const [page, setPage] = useState(0);

	// One-based UI
	return (
		<Pagination
			value={page + 1}
			setValue={(page) => setPage(page - 1)}
			max={TOTAL_PAGES + 1}
			min={1}
		/>
	);
};

Utils.story(Counting, {
	desc: `
In most cases, paginations should start at "1" to mimic real-life counting.
However, your pagination back end may start at "0". In these cases, it's
recommended to use zero-based counting for your state and most logic, and only
translate to one-based in the pagination's props.
`,
});
