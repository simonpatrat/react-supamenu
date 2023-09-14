export type SupamenuMenuType =
  | "classic"
  | "modal"
  | "off-canvas"
  | "unstyled"
  | "full-screen"
  | "off-canvas-v2";

import { SupaMenuSettings } from "@simonpatrat/supamenu";

export interface SupamenuTheme extends Record<string, unknown> {
  accentColor?: string;

  fontFamily?: string;
  fontSize?: string;
  background?: string;
  scrollbarColor?: string;
  linkColor?: string;

  focusOutlineWidth?: string;
  focusOutlineStyle?: string;
  toggleButtonBackgroundColor?: string;
  megaMenuDropdownMinHeight?: string;
  megaMenuDropdownWidth?: string;

  modalWidth?: string;
  modalMaxWidth?: string;
  modalHeight?: string;
  modaleMaxHeight?: string;

  dropdownDistance?: string;

  offCanvasMenuBoxShadow?: string;
  offCanvasMenuLinkBorderRadius?: string;

  classicMenuBorder?: string;
  classicMenuBoxShadow?: string;
  classicMenuScrolledBoxShadow?: string;
  classicMenuBorderRadius?: string;
  classicMenuDropdownBorder?: string;
  classicMenuDropdownBorderRadius?: string;
  classicMenuDropdownBoxShadow?: string;
  classicMenuDropdownMinWidth?: string;
  classicMenuDropdownLinkBackgroundHover?: string;

  // TODO: support darkmode customization
  darkMode?: Omit<SupamenuTheme, "darkMode">;
}

export interface SupamenuComponentProps extends SupaMenuSettings {
  id: string;
  accentColor?: string;
  testId?: string;
  align?: "left" | "right" | "center";
  children?: React.ReactNode;
  position?: "sticky" | "sticky-bottom" | "fixed" | "fixed-bottom";
  theme?: SupamenuTheme;
  darkMode?: boolean;
  className?: string;
}
