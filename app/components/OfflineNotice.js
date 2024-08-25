import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import Text from "./Text";
import colors from "../config/colors";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection.</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.danger,
    height: 50,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
