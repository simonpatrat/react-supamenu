import { SupamenuTheme } from "../../../components/SupamenuComponent/SupamenuComponent.types";
import { camelToDashCase } from "../camelToDashCase";

export const themePropsToCssVariables = (theme: SupamenuTheme) => {
  // @ts-ignore TODO: better typing on reduce fonction iterator
  return Object.keys(theme).reduce((acc, next) => {
    if (next !== "darkMode") {
      return acc + `\n--supamenu-${camelToDashCase(next)}: ${theme[next]};`;
    }
  }, "");
};
