import { IconPath } from "../icon/icon";

const base = {
	xmlns: "http://www.w3.org/2000/svg",
};

const makeIcon = (d: string): IconPath => (props) => (
	<svg {...base} viewBox="0 0 16 16" width="16" height="16" {...props}>
		<path d={d}></path>
	</svg>
);

/**
 * A very small subset of the "icon" package. This contains icons that are used
 * by the "core" package to avoid importing "icon" into "core"
 */
export const coreIcons = {
	tick: makeIcon("M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z"),
	dot: makeIcon("M8 11.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"),
	caret: makeIcon("M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 00-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z"),
	minus: makeIcon("M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"),
};
