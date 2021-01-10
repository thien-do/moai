import { storiesOf } from "@storybook/react";
import { Button } from "../button/button";
import { toast } from "./toast";

storiesOf("Toast", module).add("Main", () => (
	<Button onClick={() => toast(toast.types.success, "Hello")}>Hello</Button>
));
