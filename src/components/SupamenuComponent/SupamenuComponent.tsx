import * as React from "react";

import { SupaMenu } from "@simonpatrat/supamenu";

import "@simonpatrat/supamenu/dist/css/supamenu.css";
import clsx from "clsx";

import { SpmCloseButton } from "..";
import { SpmActionType, useSupaMenu } from "../context/SpmContext";

import { SupamenuComponentProps } from "./SupamenuComponent.types";
import { themePropsToCssVariables } from "../../lib/utils/helpers/themePropsToCssVariables";

export const SupamenuComponent = ({
  id,
  type = "classic",
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
}: SupamenuComponentProps) => {
  const menuElRef = React.useRef<HTMLElement | null>(null);
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
    [type, align, position]
  );

  const spmContainerClassNames = React.useMemo(() => {
    return clsx("spm-container", "spm-inner-container", {
      "spm-grid grid-2-cols": type === "full-screen",
    });
  }, [type]);

  const themeVariables = React.useMemo(() => {
    return theme ? themePropsToCssVariables(theme) : "";
  }, [theme]);

  return (
    <>
      {accentColor && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
        :root {
          --supamenu-accent-color: ${accentColor};
        }

        `,
          }}
        />
      )}

      {themeVariables && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .supamenu {
                ${themeVariables}
              }
        `,
          }}
        />
      )}
      <nav
        className={menuClassNames}
        ref={menuElRef}
        data-testid={testId}
        id={id}
        {...(darkMode && !autoDetectColorScheme && { "data-theme": "dark" })}
      >
        <SpmCloseButton />
        <div className={spmContainerClassNames}>{children}</div>
      </nav>
    </>
  );
};
