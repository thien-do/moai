import { ReactElement } from "react";
import { Button } from "../../core/src";

export function FormSubmitButton({ busy }: { busy: boolean }): ReactElement {
	return <Button type="submit" highlight busy={busy} children="Submit" />;
}
