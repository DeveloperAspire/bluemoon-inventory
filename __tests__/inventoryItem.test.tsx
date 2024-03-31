// @ts-nocheck

import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { InventoryType } from "../app/services/helpers";
import InventoryListingScreen from "../app/screens/InventoryListingScreen";
import EditInventoryScreen from "../app/screens/EditInventoryScreen";

describe("InventoryListingScreen", () => {
  test("navigates to edit screen when an inventory item is tapped", async () => {
    // Mock inventory items
    const mockInventory: InventoryType[] = [
      {
        id: "1",
        name: "Item 1",
        stock: 10,
        price: 20,
        description: "Description for item 1",
        image: "image1.jpg",
      },
      {
        id: "2",
        name: "Item 2",
        stock: 20,
        price: 30,
        description: "Description for item 2",
        image: "image2.jpg",
      },
    ];

    // Mock navigation stack
    const Stack = createStackNavigator();

    // Mock navigation function
    const navigate = jest.fn();

    // Render InventoryListingScreen within a NavigationContainer
    const { getByText } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="InventoryListing"
            component={InventoryListingScreen}
            initialParams={{ inventoryList: mockInventory }}
          />
          <Stack.Screen name="EditInventory" component={EditInventoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    // Wait for the inventory items to be rendered
    await waitFor(() => {
      // Tap on the first inventory item
      fireEvent.press(getByText("Item 1"));
    });

    // Assert that navigation function is called with correct route name and parameters
    expect(navigate).toHaveBeenCalledWith("EditInventory", {
      id: "1",
      name: "Item 1",
      stock: 10,
      price: 20,
      description: "Description for item 1",
      image: "image1.jpg",
    });
  });
});
