import React from "react";
import { SupamenuComponentProps, SupamenuMenuType } from "../types";
import { SpmActionType, useSupaMenu } from "../context/SpmContext";
import { SupaMenu } from "@simonpatrat/supamenu";
import clsx from "clsx";
import { themePropsToCssVariables } from "../lib/utils/helpers/themePropsToCssVariables";

export const useCreateSupamenu = ({
  id,
  align,
  position,
  type = "classic",
  autoDetectColorScheme = false,
  onHide,
  onShow,
  theme,
  testId,
  darkMode,
}: SupamenuComponentProps & { type: SupamenuMenuType }) => {
  const menuElRef = React.useRef<HTMLMenuElement | null>(null);
  const loadedSupamenu = React.useRef<SupaMenu | null>(null);

  const { menus, dispatch } = useSupaMenu();

  const config = React.useMemo(
    () => ({
      autoDetectColorScheme,
    }),
    [autoDetectColorScheme, onHide, onShow]
  );

  React.useEffect(() => {
    if (menuElRef.current && !loadedSupamenu?.current) {
      loadedSupamenu.current = new SupaMenu(menuElRef.current, config);
      if (menus && !menus?.[id] && typeof dispatch === "function") {
        dispatch({
          type: SpmActionType.REGISTER,
          payload: { id, menu: loadedSupamenu.current },
        });
      }
    }
  }, []);

  const menuClassNames = React.useMemo(
    () =>
      clsx("supamenu", {
        [`supamenu--${type}`]: type,
        [`supamenu--align-${align}`]: align !== "center",
        [`supamenu--sticky`]: position === "sticky",
        [`supamenu--sticky--bottom`]: position === "sticky-bottom",
        [`supamenu--fixed`]: position === "fixed",
        [`supamenu--fixed--bottom`]: position === "fixed-bottom",
      }),
    [type, align, position, type]
  );

  const spmContainerClassNames = React.useMemo(() => {
    return clsx("spm-container", "spm-inner-container", {
      "spm-grid grid-2-cols": type === "full-screen",
    });
  }, [type]);

  const themeVariables = React.useMemo(() => {
    return theme ? themePropsToCssVariables(theme) : "";
  }, [theme]);

  return {
    themeVariables,
    menuClassNames,
    spmContainerClassNames,
    menuElRef,
  };
};
