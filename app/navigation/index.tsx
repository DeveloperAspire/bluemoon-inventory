import { View } from "react-native";
import React from "react";
import myTheme from "./navigationTheme";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";

const Navigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={myTheme}>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
};

export default Navigator;
