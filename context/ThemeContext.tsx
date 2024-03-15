import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeEnum } from "@/enums/ThemeEnum";
import type { ThemeContextType } from "@/types/ThemeType";
import { useColorScheme, ColorValue } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

const ASYNC_STORAGE_ITEM_KEY = "theme";
const initContext = {
  theme: ThemeEnum.Light,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(initContext);

export const MyThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.Dark);

  useEffect(() => {
    // Load saved theme from storage
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(ASYNC_STORAGE_ITEM_KEY);
        if (savedTheme) {
          setTheme(savedTheme as ThemeEnum);
        }
      } catch (error) {
        console.log("Error loading theme:", error);
      }
    };
    getTheme();
  }, []);

  useEffect(() => {
    // Set theme to system selected theme
    if (colorScheme) {
      setTheme(colorScheme as ThemeEnum);
    }
  }, [colorScheme]);

  const toggleTheme = (newTheme: ThemeEnum) => {
    setTheme(newTheme);
    // Save selected theme to storage
    AsyncStorage.setItem(ASYNC_STORAGE_ITEM_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider
        value={theme === ThemeEnum.Dark ? DarkTheme : DefaultTheme}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
