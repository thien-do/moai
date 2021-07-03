import { Pagination } from "../../../core/src";
import { useCallback, useState } from "react";

export const GallerPagination = (): JSX.Element => {
	const [page, setPage_] = useState(5);
	const setPage = useCallback((page): Promise<void> => {
		return new Promise((resolve) => {
			setPage_(page);
			window.setTimeout(() => resolve(), 1000);
		});
	}, []);

	return <Pagination value={page} setValue={setPage} max={10} min={1} />;
};
