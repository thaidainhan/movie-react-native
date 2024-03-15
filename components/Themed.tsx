/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from "react-native";

import Colors from "@/constants/Colors";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";
import { TextSize } from "@/constants/Size";
import { SizeEnum } from "@/enums/SizeEnum";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  size?: SizeEnum;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { theme } = useContext(ThemeContext);

  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function ThemedText(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    size = TextSize.M,
    ...otherProps
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultText style={[{ color, fontSize: size }, style]} {...otherProps} />
  );
}

export function ThemedView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
