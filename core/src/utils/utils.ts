// Validate
export const validateStyles = (obj: object) => {
	Object.keys(obj).forEach((key) => {
		const value = (obj as any)[key];
		if (value === undefined) throw Error(`${key} is undefined`);
	});
};
