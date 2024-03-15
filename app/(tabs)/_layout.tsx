import React, { useContext, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Tabs } from "expo-router";
import { Pressable, Image, Button } from "react-native";

import Colors from "@/constants/Colors";
import { useClientOnlyValue } from "@/hooks/useClientOnlyValue";
import ThemeContext from "@/context/ThemeContext";
import Logo from "@/components/Logo";
import { retrieveDeviceId, saveDeviceId } from "@/lib/Storage";
import { IconSize } from "@/constants/Size";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  size?: number;
}) {
  return (
    <Ionicons
      size={props.size || IconSize.L}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-sharp" color={color} />
          ),

          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <Ionicons
          //           name="notifications"
          //           size={24}
          //           color={Colors[theme].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="searches/[id]"
        options={{
          title: "Searches",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-sharp" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="movie/[id]"
        options={{
          href: null,
          title: "Movie",
        }}
      />
    </Tabs>
  );
}
