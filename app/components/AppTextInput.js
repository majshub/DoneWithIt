import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaulStylyes from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaulStylyes.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaulStylyes.colors.medium}
        style={defaulStylyes.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaulStylyes.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
