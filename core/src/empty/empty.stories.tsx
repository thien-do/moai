import { storiesOf } from "@storybook/react";
import { Empty } from "../empty/empty";
import { Dialog } from "../dialog/dialog";

storiesOf("Empty", module).add("Main", () => (
	<div>
		<Empty
			message="Lỗi kết nối, vui lòng chờ trong giây lát."
			actionLabel="Thử lại"
		/>
		<br />
		<Empty
			message="Lỗi kết nối, vui lòng thử lại sau"
			actionLabel="Thử lại"
			actionHandler={alertRetry} />
	</div>
));

const alertRetry = async () => {
	Dialog.alert("Retry connection !!!");
}