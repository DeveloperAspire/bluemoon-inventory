import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import AppText from "../AppText";

import colors from "../../config/colors";

interface ItemProps {
  name: string;
  totalStock: number;
  price: number;
  description: string;
  onPress: () => void;
  //   image: string;
}

const InventoryItem: React.FC<ItemProps> = ({
  name,
  totalStock,
  price,
  description,
  //   image,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require("../../../assets/beans.jpeg")}
          />
        </View>
        <View style={{ flex: 3 }}>
          <View style={styles.detailsContainer}>
            <AppText style={styles.name}>{name}</AppText>
            <AppText style={styles.subTitle}>NGN {price}</AppText>
            <AppText style={styles.stock}>{totalStock} PCS</AppText>
          </View>
          <AppText style={styles.desc}>{description}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#e4e7ec",
  },
  detailsContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
  },
  subTitle: {
    //     color: colors.primary,
  },
  name: {
    marginBottom: 7,
    fontSize: 20,
    fontWeight: "bold",
  },

  stock: {
    fontWeight: "bold",
  },
  desc: {
    textAlign: "left",
  },
});

export default InventoryItem;
