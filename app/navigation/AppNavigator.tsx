import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import NewButton from "../components/common/NewButton";
import CreateInventoryScreen from "../screens/CreateInventoryScreen";
import { Home } from "iconsax-react-native";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Home size={size} color={color} variant="Bold" />
        ),
      }}
    />
    <Tab.Screen
      name="Create Inventory"
      component={CreateInventoryScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewButton onPress={() => navigation.navigate("Create Inventory")} />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    {/* <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default AppNavigator;
