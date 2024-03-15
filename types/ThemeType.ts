import { ThemeEnum } from "@/enums/ThemeEnum";

export type ThemeContextType = {
    theme: ThemeEnum | "light" | "dark",
    toggleTheme: (newTheme: ThemeEnum) => void
};
