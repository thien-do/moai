import { DivPx, Checkbox, CheckboxProps, Radio, RadioProps } from "..";
import s from "../styles.module.css";

const CheckboxRow = (props: Partial<CheckboxProps>): JSX.Element => (
	<>
		<Checkbox {...props} defaultChecked={false} children="Unchecked" />
		<DivPx size={8} />
		<Checkbox {...props} defaultChecked={true} children="Checked" />
		<DivPx size={8} />
		<Checkbox {...props} indeterminate={true} children="Mixed" />
	</>
);

interface RadioRowProps extends Partial<RadioProps> {
	name: string;
}

const RadioRow = (props: RadioRowProps): JSX.Element => (
	<>
		<Radio
			defaultChecked={false}
			children="Unchecked"
			value="unchecked"
			{...props}
		/>
		<DivPx size={8} />
		<Radio
			defaultChecked={true}
			children="Checked"
			value="checked"
			{...props}
		/>
		<DivPx size={8} />
		<Radio
			defaultChecked={false}
			children="Unchecked"
			value="unchecked"
			{...props}
		/>
	</>
);

export const GallerySelectionCheckbox = (): JSX.Element => (
	<div className={s.flex}>
		<div className={s.flex1}>
			<CheckboxRow />
			<DivPx size={8} />
			<CheckboxRow disabled />
		</div>
		<div className={s.flex1}>
			<RadioRow name="enabled sample" />
			<DivPx size={8} />
			<RadioRow name="disabled sample" disabled />
		</div>
	</div>
);
