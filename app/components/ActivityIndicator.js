import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      style={styles.animation}
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
}

const styles = StyleSheet.create({
  animation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ActivityIndicator;
