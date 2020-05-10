declare module "*.module.scss" {
	const classes: { readonly [key: string]: string | undefined };
	export default classes;
}

declare module "*.scss";
