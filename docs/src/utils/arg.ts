import { ControlType } from "@storybook/blocks";
import { ArgTypes, Args } from "@storybook/react/*";

const argOptions = (target: unknown): string[] | undefined => {
	if (target === null || target === undefined) return;

	if (Array.isArray(target)) {
		return target;
	}

	if (typeof target === "object") {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return Object.keys(target as any);
	}
};

const argControl = (target: unknown): ControlType | false => {
	if (target === null || target === undefined) return false;

	if (Array.isArray(target)) {
		const type = target.length > 4 ? "select" : "radio";
		return type;
	}

	if (typeof target === "object") {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const options = Object.keys(target as any);
		const type = options.length > 4 ? "select" : "radio";
		return type;
	}

	return target as ControlType;
};

export const utilsArg = (
	target: unknown,
	category?: string,
): Partial<ArgTypes<Args>> => {
	const table = category ? { category } : undefined;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const control = argControl(target) as any;
	const options = argOptions(target);
	return { options, control, table };
};
