import React from "react";
import { Text } from "react-native";

import defaulStylyes from "../config/styles";

function AppText({ children, style }) {
  return <Text style={[defaulStylyes.text, style]}>{children}</Text>;
}

export default AppText;
