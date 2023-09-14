import clsx from "clsx";

import { SpmCloseButton } from "../SpmCloseButton";

import "@simonpatrat/supamenu/dist/css/supamenu-off-canvas-v2.css";
import { SupamenuComponentProps } from "../../types";
import { useCreateSupamenu } from "../../hooks/useCreateSupamenu";
import { SpmThemeStyles } from "../SpmThemeVariables";

const SupamenuOffCanvasV2 = ({
  id,
  autoDetectColorScheme = false,
  testId,
  accentColor,
  align = "center",
  children,
  position,
  onHide,
  onShow,
  theme,
  darkMode,
  className,
}: SupamenuComponentProps) => {
  const { themeVariables, menuClassNames, spmContainerClassNames, menuElRef } =
    useCreateSupamenu({
      id,
      type: "off-canvas-v2",
      autoDetectColorScheme,
      testId,
      accentColor,
      align,
      children,
      position,
      onHide,
      onShow,
      theme,
      darkMode,
    });

  const menuElementProps = {
    id,
    ref: menuElRef,
    className: clsx(menuClassNames, className),
    "data-testid": testId,
    ...(darkMode && !autoDetectColorScheme && { "data-theme": "dark" }),
  };

  return (
    <>
      <SpmThemeStyles
        themeVariables={themeVariables}
        accentColor={accentColor}
      />
      <nav {...menuElementProps}>
        <div className={spmContainerClassNames}>{children}</div>
      </nav>
    </>
  );
};

export default SupamenuOffCanvasV2;