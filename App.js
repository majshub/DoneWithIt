import React from "react";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import { View } from "react-native";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
