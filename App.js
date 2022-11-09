import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0A0C0C" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}
