import { Button, toast, ToastPane } from "@moai/core";

const noop = () => {};

export const GalleryToast = (): JSX.Element => (
	<div className="space-y-16">
		<div className="space-y-8">
			<Button
				onClick={() => toast("success", "Post published")}
				children="Open success toast"
			/>
			<ToastPane
				close={noop}
				type={ToastPane.type.success}
				children='Toast with "success" type'
			/>
		</div>
		<div className="space-y-8">
			<Button
				onClick={() => toast("error", "Cannot publish post")}
				children="Open error toast"
			/>
			<ToastPane
				close={noop}
				type={ToastPane.type.error}
				children='Toast with "error" type'
			/>
		</div>
	</div>
);
