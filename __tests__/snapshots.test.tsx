// @ts-nocheck
import React from "react";
import { render } from "@testing-library/react-native";
import InventoryListingScreen from "../app/screens/InventoryListingScreen";
import CreateInventoryScreen from "../app/screens/CreateInventoryScreen";
import EditInventoryScreen from "../app/screens/EditInventoryScreen";

describe("InventoryListingScreen", () => {
  test("renders the inventory listing screen correctly", () => {
    const navigation = {}; // Mock navigation object
    const { toJSON } = render(
      <InventoryListingScreen navigation={navigation} />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("CreateInventoryScreen", () => {
  test("renders the create inventory screen correctly", () => {
    const navigation = {}; // Mock navigation object
    const { toJSON } = render(
      <CreateInventoryScreen
        navigation={navigation}
        route={{ key: "", name: "CreateInventory" }}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("EditInventoryScreen", () => {
  test("renders the edit inventory screen correctly", () => {
    const navigation = {}; // Mock navigation object
    const { toJSON } = render(
      <EditInventoryScreen
        navigation={navigation}
        route={{ key: "", name: "EditInventory" }}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
