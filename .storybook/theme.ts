import { create } from "@storybook/theming";

const common = {
    // Highlight color
    colorPrimary: "hsl(199, 89%, 48%)", // highlight-5
    colorSecondary: "hsl(199, 89%, 48%)", // highlight-5
    // Typography
    fontBase: '"Inter var", sans-serif',
    // Branding
    brandTitle: "Moai UI kit",
    brandUrl: "https://moai.thien.do",
};

const light = create({
    ...common,
    base: "light",
    // UI
    appBg: "hsl(235, 18%, 98%)", // gray-0
    appContentBg: "hsl(0, 0%, 100%)", // white
    appBorderColor: "hsl(216, 12%, 77%)", // gray-2
    appBorderRadius: 2,
    // Text colors
    textColor: "hsl(216, 13%, 15%)", // gray-8
    textMutedColor: "hsl(220, 09%, 46%)", // gray-4
    // Toolbar default and active colors
    barTextColor: "hsl(216, 13%, 15%)", // gray-8
    barSelectedColor: "hsl(216, 13%, 15%)", // gray-8
    barBg: "hsl(0, 0%, 100%)", // white
});

const dark = create({
    ...common,
    base: "dark",
    // UI
    appBg: "hsl(216, 13%, 15%)", // gray-8
    appContentBg: "hsl(220, 13%, 18%)", // gray-7
    appBorderColor: "hsl(220, 09%, 46%)", // gray-4
    appBorderRadius: 2,
    // Text colors
    textColor: "hsl(235, 18%, 98%)", // gray-0
    textMutedColor: "hsl(218, 11%, 65%)", // gray-3
    // Toolbar default and active colors
    barTextColor: "hsl(235, 18%, 98%)", // gray-0
    barSelectedColor: "hsl(235, 18%, 98%)", // gray-0
    barBg: "hsl(220, 13%, 18%)", // gray-7
});

export const themes = { light, dark };