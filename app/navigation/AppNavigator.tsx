import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      })}
    />
    <Tab.Screen
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
