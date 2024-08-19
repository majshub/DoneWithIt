import React from "react";
import { Text } from "react-native";

import defaulStylyes from "../config/styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaulStylyes.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
