import * as React from "react";

import { SupamenuClassic } from "../SupamenuClassic";
import { SupamenuComponentProps, SupamenuMenuType } from "../../types";

import { SupamenuOffCanvas } from "../SupamenuOffCanvas";
import { SupamenuModal } from "../SupamenuModal";
import { SupamenuFullScreen } from "../SupamenuFullScreen";

export const SupamenuComponent = ({
  type = "classic",
  children,
  id,
  autoDetectColorScheme = false,
  testId,
  accentColor,
  align = "center",
  position,
  onHide,
  onShow,
  theme,
  darkMode,
}: SupamenuComponentProps & { type: SupamenuMenuType }) => {
  const MenuComponent = React.useMemo(() => {
    switch (type) {
      case "classic":
        return SupamenuClassic;
      case "off-canvas":
        return SupamenuOffCanvas;
      case "modal":
        return SupamenuModal;
      case "full-screen":
        return SupamenuFullScreen;
      default:
        return SupamenuClassic;
    }
  }, [type]);

  console.log({ type, MenuComponent });

  const menuProps = {
    type,
    children,
    id,
    autoDetectColorScheme,
    testId,
    accentColor,
    align,
    position,
    onHide,
    onShow,
    theme,
    darkMode,
  };

  return <MenuComponent {...menuProps}>{children}</MenuComponent>;
};
