import { Button, toast, ToastPane } from "@moai/core";

const noop = () => {};

export const ToastGallery = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<div className="flex-1 space-y-8">
				<Button
					onClick={() => toast("success", "Post published")}
					children="Toast Success"
				/>
				<ToastPane
					close={noop}
					type={ToastPane.type.success}
					children="Toast"
				/>
			</div>
			<div className="flex-1 space-y-8">
				<Button
					onClick={() => toast("error", "Cannot publish post")}
					children="Toast Error"
				/>
				<ToastPane
					close={noop}
					type={ToastPane.type.error}
					children="Toast"
				/>
			</div>
		</div>
		<div>
			<ToastPane
				close={noop}
				type={ToastPane.type.success}
				children="Multi-line Toast. Lorem ipsum dolor sit amet"
			/>
		</div>
	</div>
);
