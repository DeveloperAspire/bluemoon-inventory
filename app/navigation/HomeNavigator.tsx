import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import InventoryListingScreen from "../screens/InventoryListingScreen";
import InventoryDetailsScreen from "../screens/InventoryDetailsScreen";

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
    <Stack.Screen name="Inventory Details" component={InventoryDetailsScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
