import { DialogMain, DialogPane, DialogProps } from "./main/main";
import { dialogAlert } from "./native/alert";
import { dialogConfirm } from "./native/confirm";
import { dialogPrompt } from "./native/prompt";
import { DialogBody, DialogFooter, DialogHeader, DialogTitle } from "./sub/sub";

/**
 * Dialogs render content on a layer on top of the app. They are [modal][2] by
 * design. For non-modal alternatives, consider the [Popover][3] component.
 *
 * At the moment, Dialog does not use the [HTML `dialog`][1] element due to
 * its poor browser support. It is just generic content rendered via
 * [React's Portal][4].
 *
 * There are also [utility methods][5] such as `Dialog.alert` and
 * `Dialog.confirm` for common imperative use cases.
 *
 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 * [2]: https://www.nngroup.com/articles/modal-nonmodal-dialog/
 * [3]: /docs/components-popover--primary
 * [4]: https://reactjs.org/docs/portals.html
 * [5]: #utilities
 */
export const Dialog = (props: DialogProps): JSX.Element => (
  // DialogMain is extracted to its own folder to avoid circular dependencies
  <DialogMain {...props} />
);

// Layout components
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;

// Utilities
Dialog.alert = dialogAlert;
Dialog.confirm = dialogConfirm;
Dialog.prompt = dialogPrompt;

// Not sure if we should expose these actually
Dialog.Header = DialogHeader;
Dialog.Pane = DialogPane;
