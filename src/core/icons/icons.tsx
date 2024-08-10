import * as go from "react-icons/go";
import * as ri from "react-icons/ri";
import { BlankIcon } from "./blank-icon";

/**
 * A very small subset of the "icon" package. This contains icons that are used
 * by the "core" package to avoid importing "icon" into "core"
 */
export const coreIcons = {
  blank: BlankIcon,
  caret: go.GoTriangleDown,
  check: go.GoCheck,
  chevronDown: go.GoChevronDown,
  chevronLeft: go.GoChevronLeft,
  chevronRight: go.GoChevronRight,
  chevronUp: go.GoChevronUp,
  cross: go.GoX,
  dash: go.GoDash,
  dot: go.GoDotFill,
  kebab: go.GoKebabHorizontal,
  error: ri.RiErrorWarningFill,
  success: ri.RiCheckboxCircleFill,
};
