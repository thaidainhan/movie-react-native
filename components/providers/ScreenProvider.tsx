import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "../Themed";
import Space from "@/constants/Space";
import { ScrollView } from "react-native-virtualized-view";

const ScreenProvider = ({
  children,
  isPaddingHorizontal = true,
}: {
  children: React.ReactNode;
  isPaddingHorizontal?: boolean;
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      overflow: "scroll",
      flexDirection: "column",
      gap: Space.VerticalGap.L,
      paddingVertical: isPaddingHorizontal
        ? Space.ScreenPadding.Vertical
        : Space.VerticalGap.L,
      paddingHorizontal: isPaddingHorizontal
        ? Space.ScreenPadding.Horizontal
        : 0,
    },
  });

  return (
    <ScrollView>
      <ThemedView style={styles.container}>{children}</ThemedView>
    </ScrollView>
  );
};

export default ScreenProvider;
