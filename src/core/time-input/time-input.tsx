import {
  ButtonGroup,
  ButtonGroupItemProps,
} from "../button-group/button-group";
import {
  Select,
  SelectOption,
  SelectProps,
  SelectSize,
  SelectStyle,
} from "../select/select";

// Minute
export type TimeInterval = 1 | 15 | 30 | 60;

interface Props {
  /**
   * The difference in minutes between 2 options. For example, if "interval"
   * is 15, the option would be 00:15, 00:30, 00:45 and so on. Should choose
   * from `TimeInput.intervals`.
   *
   * It is NOT supported to change the interval at run-time because the
   * "value" must always follow the interval.
   */
  interval: TimeInterval;
  /**
   * Value of the TimeInput in controlled mode. Currently we don't support
   * uncontrolled TimeInput. The format is Date but it will only use the
   * time info (i.e. hour, minute, second).
   *
   * Note that this does not include "null" or "undefined", which means the
   * time must always be defined and follow the interval. TimeInput will
   * throw an error if the value's minute does not satisfy the "interval"
   * prop.
   *
   * Also, to avoid subtle bug when comparing times, the Date must have "0"
   * second. If not, TimeInput will throw a runtime error.
   */
  value: Date;
  /**
   * Callback to set the value in controlled mode. Currently we don't support
   * uncontrolled TimeInput. See "value" for explanation on the type.
   */
  setValue: (value: Date) => void;
  /**
   * Style of the input. Choose one from `TimeInput.styles`.
   */
  style?: SelectStyle;
  /**
   * Size of the input. Choose one from `TimeInput.sizes`.
   */
  size?: SelectSize;
  /**
   * Make the TimeInput expands to fill its container. This helps you control
   * the TimeInput width by setting the width of its container.
   */
  fill?: boolean;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * The "id" attribute in HTML
   */
  id?: string;
}

const toNumber = (num: number): SelectOption<number> => ({
  value: num,
  id: num.toString(),
  label: `0${num.toString()}`.slice(-2),
});

type Option = SelectOption<number>;
const hours: Option[] = [...Array(24).keys()].map(toNumber);
const minutes: Option[] = [...Array(60).keys()].map(toNumber);
const quaters: Option[] = [0, 15, 30, 45].map(toNumber);
const halfs: Option[] = [0, 30].map(toNumber);

const OPTIONS_MAP: Record<TimeInterval, SelectOption<number>[]> = {
  "1": minutes,
  "15": quaters,
  "30": halfs,
  "60": [],
};

const setHour =
  (props: Props) =>
  (hour: number): void => {
    const value = new Date(props.value.getTime());
    value.setHours(hour);
    value.setSeconds(0); // See comment at props.value
    props.setValue(value);
  };

const setMinute =
  (props: Props) =>
  (minute: number): void => {
    const value = new Date(props.value.getTime());
    value.setMinutes(minute);
    value.setSeconds(0); // See comment at props.value
    props.setValue(value);
  };

export const TimeInput = (props: Props): JSX.Element => {
  // Avoid subtle time comparing bug by enforcing value Date has 0 second
  if (props.value.getSeconds() !== 0)
    throw Error("Date value of TimeInput must have 0 second");

  const children: ButtonGroupItemProps[] = [];
  const select: Partial<SelectProps<number>> = {
    disabled: props.disabled,
    fill: props.fill,
    style: props.style,
    size: props.size,
  };
  const hour = (
    <Select<number>
      {...select}
      value={props.value.getHours()}
      setValue={setHour(props)}
      options={hours}
    />
  );
  children.push({ fill: props.fill, element: hour });
  if (props.interval !== 60) {
    const minute = (
      <Select<number>
        {...select}
        value={props.value.getMinutes()}
        setValue={setMinute(props)}
        options={OPTIONS_MAP[props.interval]}
      />
    );
    children.push({ fill: props.fill, element: minute });
  }
  return <ButtonGroup fill={props.fill} children={children} />;
};

TimeInput.styles = Select.styles;
TimeInput.sizes = Select.sizes;
TimeInput.intervals = {
  minute: 1 as TimeInterval,
  quarter: 15 as TimeInterval,
  half: 30 as TimeInterval,
  hour: 60 as TimeInterval,
};
