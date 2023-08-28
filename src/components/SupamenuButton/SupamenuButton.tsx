import { useCallback, useEffect, useMemo, useState } from "react";
import { useSupaMenu } from "../context/SpmContext";
import clsx from "clsx";

export const SupamenuButton = ({
  menuId,
  className,
  children,
  label,
}: {
  menuId: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { menus } = useSupaMenu();

  const handleButtonClick = useCallback(() => {
    if (menus?.[menuId]) {
      menus[menuId].toggle();
    }
  }, [menus, menuId]);

  const handleMenuVisibleStateChanging = useCallback(() => {
    if (menus?.[menuId]) {
      setIsMenuVisible(menus[menuId].getIsVisible());
    }
  }, [menus, menuId]);

  useEffect(() => {
    const currentMenu = menus?.[menuId];
    const currentMenuElement = currentMenu && currentMenu?.getElement?.();
    if (currentMenuElement) {
      currentMenuElement.addEventListener(
        `supamenu:${menuId}:hide`,
        handleMenuVisibleStateChanging
      );
      currentMenuElement.addEventListener(
        `supamenu:${menuId}:show`,
        handleMenuVisibleStateChanging
      );
    }

    return () => {
      if (currentMenuElement) {
        currentMenuElement.removeEventListener(
          `supamenu:${menuId}:hide`,
          handleMenuVisibleStateChanging
        );
        currentMenuElement.removeEventListener(
          `supamenu:${menuId}:show`,
          handleMenuVisibleStateChanging
        );
      }
    };
  }, [menus]);

  const classNames = useMemo(
    () =>
      clsx("spm--toggle-menu-button", className, {
        "menu-visible": isMenuVisible,
      }),
    [isMenuVisible]
  );

  return (
    <button type="button" onClick={handleButtonClick} className={classNames}>
      {label}
      {children}
    </button>
  );
};
