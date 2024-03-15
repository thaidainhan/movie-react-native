import React, { createContext, useState, useEffect, ReactNode } from "react";
import { retrieveDeviceId, saveDeviceId } from "@/lib/Storage";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@tanstack/react-query";
import AccountService from "@/services/AccountService";
import { AccountType } from "@/types/AccountType";

export type AccountContextType = {
  account: AccountType | null;
  deviceId: string;
};

const initContext = {
  account: null,
  deviceId: "",
};

const AccountContext = createContext<AccountContextType>(initContext);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [deviceId, setDeviceId] = useState<string>("");

  useEffect(() => {
    const getDevice = async () => {
      try {
        const id = await retrieveDeviceId();

        if (!id) {
          const uuid = uuidv4();
          await saveDeviceId(uuid);
          setDeviceId(uuid);
        }

        setDeviceId(id);
      } catch (error) {
        console.log("Error loading device:", error);
      }
    };
    getDevice();
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["getAccount"],
    queryFn: () => AccountService.getAccount(),
  });

  return (
    <>
      {!isLoading && deviceId && (
        <AccountContext.Provider
          value={{ account: data || null, deviceId: deviceId }}
        >
          {children}
        </AccountContext.Provider>
      )}
    </>
  );
};
export default AccountContext;
