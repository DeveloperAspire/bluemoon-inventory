import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InventoryItem from "../components/common/InventoryItem";

const InventoryListingScreen = () => {
  return (
    <View style={styles.container}>
      <InventoryItem
        name="Beans"
        totalStock={3}
        price={60}
        description="A bag of senegal beans"
        onPress={() => console.log("hello")}
      />
    </View>
  );
};

export default InventoryListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F3F4",
    padding: 10,
  },
});
