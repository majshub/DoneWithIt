import React, { useState } from "react";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
