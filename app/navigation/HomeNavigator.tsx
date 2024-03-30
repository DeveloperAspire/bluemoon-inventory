import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InventoryListingScreen from "../screens/InventoryListingScreen";
import EditInventoryScreen from "../screens/EditInventoryScreen";
import { InventoryType } from "../services/helpers";

export type StackParamList = {
  InventoryListings: undefined;
  EditInventory: InventoryType;
};

const Stack = createStackNavigator<StackParamList>();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{ presentation: "modal" }}
    // screenOptions={{ presentation: "modal", headerShown: false }}
  >
    <Stack.Screen name="InventoryListings" component={InventoryListingScreen} />
    <Stack.Screen
      name="EditInventory"
      component={EditInventoryScreen}
      options={{ presentation: "card" }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
