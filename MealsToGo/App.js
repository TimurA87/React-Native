import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreens } from "./src/features/restaurants/screens/restaturants-screen";

import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreens />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
