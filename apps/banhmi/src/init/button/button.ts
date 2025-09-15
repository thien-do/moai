import { border, Button, ProgressCircle } from "main/src/core";
import outset from "./outset.module.css";
import flat from "./flat.module.css";
import size from "./size.module.css";

Button.colors.highlight = {
  flat: {
    selectedClassName: flat.selected,
    mainClassName: [flat.highlight, border.radius].join(" "),
    progressCircleColor: ProgressCircle.colors.neutral,
  },
  outset: {
    selectedClassName: outset.selected,
    mainClassName: [outset.highlight, border.radius].join(" "),
    progressCircleColor: ProgressCircle.colors.neutral,
  },
};

Button.colors.failure = {
  flat: {
    selectedClassName: flat.selected,
    mainClassName: [flat.failure, border.radius].join(" "),
    progressCircleColor: ProgressCircle.colors.neutral,
  },
  outset: {
    selectedClassName: outset.selected,
    mainClassName: [outset.failure, border.radius].join(" "),
    progressCircleColor: ProgressCircle.colors.neutral,
  },
};

Button.colors.none = {
  flat: {
    selectedClassName: flat.selected,
    mainClassName: [flat.main, border.radius].join(" "),
    progressCircleColor: ProgressCircle.colors.neutral,
  },
  outset: {
    selectedClassName: outset.selected,
    mainClassName: [outset.main, border.radius].join(" "),
    progressCircleColor: ProgressCircle.colors.neutral,
  },
};

Button.sizes = (() => {
  const LargeIcon = { iconSize: 16, iconMargin: 8 };
  const MediumIcon = { iconSize: 16, iconMargin: 8 };
  const SmallIcon = { iconSize: 14, iconMargin: 6 };
  return {
    large: { mainClassName: size.large, ...LargeIcon },
    largeIcon: { mainClassName: size.largeIcon, ...LargeIcon },
    medium: { mainClassName: size.medium, ...MediumIcon },
    mediumIcon: { mainClassName: size.mediumIcon, ...MediumIcon },
    small: { mainClassName: size.small, ...SmallIcon },
    smallIcon: { mainClassName: size.smallIcon, ...SmallIcon },
  };
})();
