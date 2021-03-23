import { storiesOf } from "@storybook/react";
import { Empty } from "../empty/empty";

storiesOf("Empty", module).add("Main", () => (
	<div>
		<Empty active={false} errorMsg="Lỗi kết nối, vui lòng chờ trong giây lát." />
		<br />
		<Empty active={true} errorMsg="Lỗi kết nối, vui lòng thử lại sau" onClickBtn={alertRetry}/>
	</div>
));

let alertRetry = () => {
	alert("retry connection !");
}