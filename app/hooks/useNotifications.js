import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";

const useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) {
      const subscription =
        Notifications.addNotificationReceivedListener(notificationListener);
      return () => subscription.remove();
    }
  }, [notificationListener]);

  const registerForPushNotifications = async () => {
    try {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } =
          await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") return;
      }
      const tokenResponse = await Notifications.getExpoPushTokenAsync();
      const token = tokenResponse.data;

      expoPushTokensApi.register(token);
      console.log("Push token:", token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};

export default useNotifications;
