/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#FF4458";
const tintColorDark = "#FF5864";

export const Colors = {
  light: {
    text: "#1A1A1A",
    background: "#FFFFFF",
    tint: tintColorLight,
    icon: "#7C7C7C",
    tabIconDefault: "#ADADAD",
    tabIconSelected: tintColorLight,
    border: "#F2F2F2",
  },
  dark: {
    text: "#F5F5F5",
    background: "#0F1112",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#4E5458",
    tabIconSelected: tintColorDark,
    border: "#26292B",
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "System",
    serif: "Times New Roman",
    rounded: "ui-rounded",
    mono: "Menlo",
  },
  android: {
    sans: "Times",
    serif: "serif",
    rounded: "sans-serif-medium",
    mono: "monospace",
  },
  web: {
    sans: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "Figtree, 'SF Pro Rounded', sans-serif",
    mono: "ui-monospace, 'Cascadia Code', 'Segoe UI Mono', monospace",
  },
  default: {
    sans: "System",
    serif: "serif",
    rounded: "System",
    mono: "monospace",
  },
});