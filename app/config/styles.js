import { Platform } from "react-native";

import colors from "./colors";

const defaulStylyes = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};

export default defaulStylyes;
