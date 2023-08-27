import { SupaMenu } from "@simonpatrat/supamenu";
import { createContext, useContext, useReducer } from "react";

type Menus = Record<string, SupaMenu>;

export enum SpmActionType {
  REGISTER = "register",
}

// An interface for our actions
interface SpmAction {
  type: SpmActionType;
  payload: { id: string; menu: SupaMenu };
}

const SpmContext = createContext<Menus>({});

const SpmDispatchContext = createContext<React.Dispatch<SpmAction> | null>(
  null
);

export function SupamenuProvider({ children }: { children?: React.ReactNode }) {
  const [menus, dispatch] = useReducer(menusReducer, initialMenus);

  return (
    <SpmContext.Provider value={menus}>
      <SpmDispatchContext.Provider value={dispatch}>
        {children}
      </SpmDispatchContext.Provider>
    </SpmContext.Provider>
  );
}

export function useSupaMenuMenus() {
  return useContext(SpmContext);
}

export function useSupaMenuDispatch() {
  return useContext(SpmDispatchContext);
}

export function useSupaMenu() {
  const dispatch = useSupaMenuDispatch() as NonNullable<
    React.Dispatch<SpmAction>
  >;
  const menus = useSupaMenuMenus();

  return {
    menus,
    dispatch,
  };
}

export function menusReducer(menus: Menus, action: SpmAction) {
  switch (action.type) {
    case SpmActionType.REGISTER: {
      return {
        ...menus,
        [action.payload.id]: action.payload.menu,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialMenus: Menus = {};
