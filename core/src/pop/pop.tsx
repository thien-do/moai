// import React from "react";
// import Tippy from "@tippyjs/react";
// import { roundArrow } from "tippy.js";
// import "tippy.js/dist/tippy.css";
// import "tippy.js/dist/svg-arrow.css";
// import "tippy.js/animations/shift-away.css";
// import "./pop.scss";

// export interface Visible {
//     value: boolean;
//     setValue: (visible: boolean) => void;
// }

// interface Props {
//     target: React.ReactElement;
//     content: string;
//     visible?: Visible;
// }

// export const Pop: React.FC<Props> = ({ target, content, visible }) => (
//     <Tippy
//         content={content}
//         animation="shift-away"
//         arrow={roundArrow}
//         duration={100}
//         visible={visible?.value ?? undefined}
//         onClickOutside={visible ? () => visible.setValue(false) : undefined}
//         placement="bottom"
//     >
//         {target}
//     </Tippy>
// );

// export { usePopAutohide } from "./use-pop-autohide";
