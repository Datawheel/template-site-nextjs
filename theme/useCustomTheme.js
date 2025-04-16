import {useMemo} from "react";
import {colors, components, globalStyles} from "./styles";
import {Heebo} from "../fonts/fonts";
import {useLocalStorage, useHotkeys, useReducedMotion} from "@mantine/hooks";

function customTheme(colorScheme, reduceMotion) {
  return ({
    fontFamily: Heebo.style.fontFamily,
    primaryColor: "accentshade",
    primaryShade: 6,
    colorScheme,
    colors: colors(colorScheme),
    components: components(reduceMotion),
    globalStyles,
  });
}

export function useCustomTheme() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const reduceMotion = useReducedMotion();
  const theme = useMemo(() => customTheme(colorScheme, reduceMotion), [colorScheme, reduceMotion]);

  const toggleColorScheme = () => setColorScheme((current) => (current === "dark" ? "light" : "dark"));
  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return {theme, colorScheme, toggleColorScheme};
}
