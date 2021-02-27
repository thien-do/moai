const objArg = (object: object) => ({
	control: { type: "radio", options: Object.keys(object) },
});

const nullArg = { control: { type: null } };

export const _StoryUtils = {
	makeObjArg: objArg,
	nullArg,
};
