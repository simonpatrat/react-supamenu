import * as React from "react";

import { SupaMenu, type SupaMenuSettings } from "@simonpatrat/supamenu";

import "@simonpatrat/supamenu/dist/css/supamenu.css";
import clsx from "clsx";

import { SpmCloseButton } from "..";
import { SpmActionType, useSupaMenu } from "../context/SpmContext";

export interface SupamenuComponentProps {
  id: string;
  config?: SupaMenuSettings;
  accentColor?: string;
  type?: "classic" | "modal" | "off-canvas";
  testId?: string;
  align?: "left" | "right" | "center";
  children?: React.ReactNode;
}

export const SupamenuComponent = ({
  id,
  type = "classic",
  config = {},
  testId,
  accentColor,
  align = "center",
  children,
}: SupamenuComponentProps) => {
  const menuElRef = React.useRef<HTMLElement | null>(null);
  const loadedSupamenu = React.useRef<SupaMenu | null>(null);

  const { menus, dispatch } = useSupaMenu();

  React.useEffect(() => {
    if (menuElRef.current && !loadedSupamenu?.current) {
      loadedSupamenu.current = new SupaMenu(menuElRef.current, config);
      if (!menus?.[id]) {
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
      }),
    [type, align]
  );

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
      <nav
        className={menuClassNames}
        ref={menuElRef}
        data-testid={testId}
        id={id}
      >
        <SpmCloseButton />
        <div className="spm-container spm-inner-container">{children}</div>
      </nav>
    </>
  );
};
