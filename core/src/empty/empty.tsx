import s from "./empty.module.css";
import { createElement } from "react";
import { Button } from "../button/button";
import cloudImg from "./empty1.jpg";

interface EmptyProps {
    active: boolean,
    errorMsg: string,
    onClickBtn?: React.MouseEventHandler
}

export const Empty = (props: EmptyProps): JSX.Element => {
    const { active, errorMsg, onClickBtn } = props;
    return (
        <div className={s.container}>
            <img src={cloudImg} />
            <p className={s.errorText}>{errorMsg}</p>
            {
                active && <Button
                    onClick={props.onClickBtn}
                    highlight={true}
                    size={Button.sizes.medium}
                    style={Button.styles.outset}
                >
                    Thử lại
                </Button>
            }
        </div>
    );
};
