import { Button } from "@moai/core";

const ButtonPage = (): JSX.Element => (
	<div>
		<p>
			This page imports only a Button from Moai. It is meant to test
			Moai&apos;s tree shaking ability. If tree shaked, this page should
			be no more than 5kb bigger than the &quot;empty&quot; one.
		</p>
		<Button children="Button" />
	</div>
);

export default ButtonPage;
