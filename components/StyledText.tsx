import { ThemedText, TextProps } from "./Themed";
import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { TextSize } from "@/constants/Size";

export function MonoText(props: TextProps) {
  return (
    <ThemedText
      {...props}
      style={[props.style, styles.title]}
      size={TextSize.S}
    />
  );
}

export function AppTitle(props: TextProps) {
  return <ThemedText {...props} style={[props.style, styles.title]} size={TextSize.XL}/>;
}
export function AppSubTitle(props: TextProps) {
  return <ThemedText {...props} style={[props.style, styles.sub_title]} />;
}

export function AppText(props: TextProps) {
  return (
    <ThemedText
      {...props}
      style={[props.style, styles.text]}
      size={TextSize.M}
      lightColor={Colors.GreyText}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  sub_title: {
    fontWeight: "600",
  },
  text: {
    fontWeight: "500",
  },
  mono: {
    fontFamily: "SpaceMono",
  },
});
