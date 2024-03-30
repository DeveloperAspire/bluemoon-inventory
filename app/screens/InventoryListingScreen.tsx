import { StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import InventoryItem from "../components/common/InventoryItem";
import Screen from "../components/Screen";
import helpers from "../services/helpers";
import AppText from "../components/AppText";

interface InventoryType {
  name: string;
  stock: number;
  price: number;
  description: string;
  image: string;
  id: string;
}

const InventoryListingScreen = ({
  navigation,
}: {
  navigation: Record<string, any>;
}) => {
  const [inventoryList, setInventoryList] =
    useState<Array<InventoryType> | null>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const inventory = await helpers.fetchAllInventoryItems();

      setInventoryList(inventory);
    };

    fetchInventory();
  });

  return (
    <Screen style={styles.container}>
      {inventoryList?.length === 0 && (
        <AppText>You don't have a saved inventory yet! 😃</AppText>
      )}

      <FlatList
        data={inventoryList}
        keyExtractor={(inventory) => inventory.id.toString()}
        renderItem={({ item }) => (
          <InventoryItem
            name={item.name}
            totalStock={item.stock}
            price={item.price}
            description={item.description}
            image={item.image}
            onPress={() =>
              navigation.navigate("EditInventory", {
                ...item,
              })
            }
          />
        )}
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
