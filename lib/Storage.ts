import { Platform } from "react-native";

import * as SecureStore from "expo-secure-store";

const KEY = "deviceId";

export const saveDeviceId = async (uuidv4: string) => {
  if (Platform.OS === "web" || Platform.OS === "windows") {
    return;
  }
  const deviceId = await retrieveDeviceId();

  if (!deviceId) {
    await SecureStore.setItemAsync(KEY, JSON.stringify(uuidv4));
  }
};

export const retrieveDeviceId = async () => {
  const deviceId: string | null = await SecureStore.getItemAsync(KEY);
  if (deviceId) {
    return JSON.parse(deviceId);
  }

  return null;
};
