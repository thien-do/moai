import { Button, Dialog, toast, ToastPane } from "../core";
import { Shot } from "./shot/shot";
import s from "./styles.module.css";

const noop = () => Dialog.alert("Noop");

export const GalleryToast = (): JSX.Element => {
  const success = (
    <div className={s.rows}>
      <Button
        fill
        onClick={() => toast(toast.types.success, "Post published")}
        children="Toast Success"
      />
      <ToastPane close={noop} type={ToastPane.types.success} children="Toast" />
    </div>
  );
  const failure = (
    <div className={s.rows}>
      <Button
        fill
        onClick={() => toast(toast.types.failure, "Cannot publish")}
        children="Toast Failure"
      />
      <ToastPane close={noop} type={ToastPane.types.failure} children="Toast" />
    </div>
  );
  const multiline = (
    <ToastPane
      close={noop}
      type={ToastPane.types.success}
      children="Multi-line Toast. Lorem ipsum dolor sit amet"
    />
  );
  return (
    <Shot>
      <div className={s.rows}>
        <div className={s.cols}>
          <div className={s.col} children={success} />
          <div className={s.col} children={failure} />
        </div>
        {multiline}
      </div>
    </Shot>
  );
};
