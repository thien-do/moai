declare module "*.module.css" {
	const classes: { readonly [key: string]: string | undefined };
	export default classes;
}

declare module "*.css";
