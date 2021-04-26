import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantScreens } from "./src/features/restaurants/screens/restaturants-screen";

export default function App() {
  return (
    <>
      <RestaurantScreens />
      <ExpoStatusBar style="auto" />
    </>
  );
}
