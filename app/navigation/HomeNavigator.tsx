import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InventoryListingScreen from "../screens/InventoryListingScreen";
import EditInventoryScreen from "../screens/EditInventoryScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{ presentation: "modal" }}
    // screenOptions={{ presentation: "modal", headerShown: false }}
  >
    <Stack.Screen
      name="Inventory Listings"
      component={InventoryListingScreen}
    />
    <Stack.Screen
      name="Edit Inventory"
      component={EditInventoryScreen}
      options={{ presentation: "card" }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
