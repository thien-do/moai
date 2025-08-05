import { Checkbox, CheckboxProps, Radio, RadioProps } from "../core";
import { Shot } from "./shot/shot";
import s from "./styles.module.css";

const CheckboxRow = (props: Partial<CheckboxProps>): JSX.Element => (
  <>
    <Checkbox {...props} defaultChecked={false} children="Unchecked" />
    <Checkbox {...props} defaultChecked={true} children="Checked" />
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
    <Radio
      defaultChecked={true}
      children="Checked"
      value="checked"
      {...props}
    />
    <Radio
      defaultChecked={false}
      children="Unchecked"
      value="unchecked"
      {...props}
    />
  </>
);

export const GalleryCheckbox = (): JSX.Element => (
  <Shot>
    <div className={s.cols}>
      <div className={[s.col, s.rows].join(" ")}>
        <CheckboxRow />
        <CheckboxRow disabled />
      </div>
      <div className={[s.col, s.rows].join(" ")}>
        <RadioRow name="enabled sample" />
        <RadioRow name="disabled sample" disabled />
      </div>
    </div>
  </Shot>
);
