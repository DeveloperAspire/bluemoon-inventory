import React from "react";
import renderer from "react-test-renderer";
import InventoryListingScreen from "../app/screens/InventoryListingScreen";

test("renders correctly", () => {
  const tree = renderer.create(<InventoryListingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
