import s from "./empty.module.css";
import { createElement } from "react";
import { Button } from "../button/button";
import cloudImg from "./empty1.jpg";

interface EmptyProps {
    message: string,
    actionLabel: string,
    actionHandler?: React.MouseEventHandler
}

export const Empty = (props: EmptyProps): JSX.Element => {
    const { message, actionLabel, actionHandler } = props;
    return (
        <div className={s.container}>
            <img src={cloudImg} />
            <p className={s.errorText}>{message}</p>
            {
                actionHandler && <Button
                    onClick={actionHandler}
                    highlight
                    size={Button.sizes.medium}
                    style={Button.styles.outset}
                >
                    {actionLabel}
                </Button>
            }
        </div>
    );
};
