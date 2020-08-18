// Validate
export const validateStyles = (obj: object) => {
	Object.keys(obj).forEach((key) => {
		const value = (obj as any)[key];
		if (value === undefined) throw Error(`${key} is undefined`);
	});
};

// @TODO: Custom name
export const portalContainer: HTMLElement = (() => {
	const element = document.getElementById("portals");
	if (element !== null) return element;
	throw Error("Portal container is null");
})();
