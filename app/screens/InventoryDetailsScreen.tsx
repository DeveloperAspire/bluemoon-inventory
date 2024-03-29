import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import AppText from "../components/AppText";
import { Edit2 } from "iconsax-react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

const InventoryDetailsScreen = ({
  route,
  navigation,
}: {
  navigation: Record<string, any>;
  route: Record<string, any>;
}) => {
  const inventory = route.params;

  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../../assets/beans.jpeg")} />
      <View style={styles.detailsContainer}>
        <View style={styles.top}>
          <AppText style={styles.name}>{inventory.name}</AppText>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => navigation.navigate("Edit Inventory")}
          >
            <AppText>Edit</AppText>
            <Edit2 size="20" color={colors.primary} />
          </TouchableOpacity>
        </View>
        <AppText style={styles.price}>Price: ₦ {inventory.price}</AppText>
        <AppText style={styles.text}>
          Total Stock: {inventory.stock} Pcs
        </AppText>
        <AppText style={styles.text}>
          Description: {inventory.description}
        </AppText>
      </View>
    </Screen>
  );
};

export default InventoryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  edit: {
    flexDirection: "row",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
