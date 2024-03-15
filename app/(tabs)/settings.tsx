import { StyleSheet, Switch, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { ThemedView, ThemedText } from "@/components/Themed";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import { Stack } from "expo-router";
import ScreenProvider from "@/components/providers/ScreenProvider";
import Colors from "@/constants/Colors";
import { TextSize } from "@/constants/Size";
import { ThemeContextType } from "@/types/ThemeType";
import { ThemeEnum } from "@/enums/ThemeEnum";
import ThemeContext from "@/context/ThemeContext";
import { AppTitle } from "@/components/StyledText";
import Space from "@/constants/Space";

export default function SettingsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [isEnabled, setIsEnabled] = useState(false);

  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme: ThemeEnum =
      theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;

    if (newTheme === ThemeEnum.Light) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }

    toggleTheme(newTheme);
  };
  return (
    <ScreenProvider>
      <View style={styles.row}>
        <AppTitle>Toggle theme:</AppTitle>
        <Switch
          trackColor={{ false: Colors.White, true: Colors.White }}
          thumbColor={isEnabled ? Colors.Black : Colors.White}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggleTheme}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
    </ScreenProvider>
  );
}

const styles = StyleSheet.create({
  switch: {},
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Space.HorizontalGap.M,
  },
});
