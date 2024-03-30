import { StyleSheet } from "react-native";
import React from "react";
import InventoryItem from "../components/common/InventoryItem";
import Screen from "../components/Screen";

const InventoryListingScreen = ({
  navigation,
}: {
  navigation: Record<string, any>;
}) => {
  return (
    <Screen style={styles.container}>
      <InventoryItem
        name="Bags of senegal beans"
        totalStock={3}
        price={60000}
        description="Bags of senegal beans due for delivery and sale"
        onPress={() =>
          navigation.navigate("Edit Inventory", {
            name: "Bags of senegal beans",
            price: 60000,
            description: "Bags of senegal beans due for delivery and sale",
            stock: 3,
          })
        }
      />
    </Screen>
  );
};

export default InventoryListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F3F4",
    padding: 20,
  },
});
