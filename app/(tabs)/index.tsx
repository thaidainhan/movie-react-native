import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

import Colors from "@/constants/Colors";
import ThemeContex from "@/context/ThemeContext";
import { useContext } from "react";
import { ThemeContextType } from "@/types/ThemeType";
import { ThemeEnum } from "@/enums/ThemeEnum";
import { ThemedText, ThemedView } from "@/components/Themed";
import Popular from "@/components/home/Popular";
import ScreenProvider from "@/components/providers/ScreenProvider";
import TopRated from "@/components/home/TopRated";

export default function HomeScreen() {

  return (
    <ScreenProvider>
      <TopRated />
      <Popular />
    </ScreenProvider>
  );
}
