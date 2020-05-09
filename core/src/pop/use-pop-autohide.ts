// import React from "react";

// import { Visible } from "./pop";

// interface Msg {
//     msg: string;
//     setMsg: (value: string) => void;
//     visible: Visible;
// }

// export const usePopAutohide = (timeout: number): Msg => {
//     const [msg, setMsg] = React.useState("");
//     const [visible, setVisible] = React.useState(false);

//     const setAndShow = React.useCallback((value: string) => {
//         setMsg(value);
//         setVisible(true);
//         window.setTimeout(() => { setVisible(false) }, timeout);
//     }, [timeout, setMsg, setVisible]);

//     return {
//         msg, setMsg: setAndShow,
//         visible: { value: visible, setValue: setVisible },
//     };
// };
