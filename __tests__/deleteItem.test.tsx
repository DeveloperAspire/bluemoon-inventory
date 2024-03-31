// @ts-nocheck

import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Alert } from "react-native"; // Import Alert for mocking
import InventoryListingScreen from "../app/screens/InventoryListingScreen";
import EditInventoryScreen from "../app/screens/EditInventoryScreen";
import helpers from "../app/services/helpers"; // Import your CRUD operations

jest.mock("react-native", () => ({
  ...jest.requireActual("react-native"),
  Alert: {
    alert: jest.fn(),
  },
}));

// const Stack = createStackNavigator();

describe("InventoryListingScreen", () => {
  beforeEach(async () => {
    // Create a mock inventory item
    const item1 = {
      id: "1",
      name: "Item 1",
      stock: 10,
      price: 20,
      description: "Description for item 1",
      image: "image1.jpg",
    };

    // Mock adding inventory item
    await helpers.addInventoryItem(item1);
  });

  test("shows confirmation popup when trying to delete an existing item", async () => {
    // Render InventoryListingScreen within a NavigationContainer
    // Mock navigation stack
    const Stack = createStackNavigator();
    const { getByText } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="InventoryListing"
            component={InventoryListingScreen}
          />
          <Stack.Screen name="EditInventory" component={EditInventoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    // Find and press the "Delete" button of an existing inventory item
    fireEvent.press(getByText("Delete"));

    // Wait for confirmation popup to be shown
    await waitFor(() => {
      // Assert that Alert.alert is called with the correct message
      expect(Alert.alert).toHaveBeenCalledWith(
        "Delete Item",
        "Are you sure you want to delete Item 1?",
        expect.any(Array)
      );
    });
  });
});
