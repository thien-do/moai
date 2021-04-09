import { storiesOf } from "@storybook/react";
import { useCallback, useState } from "react";
import { Pagination } from "./pagination";

const Default = () => {
	const [page, setPage_] = useState(5);
	const setPage = useCallback((page): Promise<void> => {
		return new Promise((resolve) => {
			setPage_(page);
			window.setTimeout(() => resolve(), 1000);
		});
	}, []);

	return (
		<div>
			<Pagination value={page} setValue={setPage} max={10} min={1} />
		</div>
	);
};

storiesOf("Pagination", module).add("Default", Default);
