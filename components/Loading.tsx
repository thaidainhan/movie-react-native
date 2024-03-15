import React from "react";
import ScreenProvider from "./providers/ScreenProvider";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import Colors from "@/constants/Colors";
import { ThemedView } from "./Themed";

const Loading = () => {
  return (
    <ThemedView style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.Orange} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Loading;
