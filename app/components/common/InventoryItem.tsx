import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import AppText from "../AppText";
import helpers from "../../services/helpers";

import colors from "../../config/colors";

interface ItemProps {
  name: string;
  totalStock: number;
  price: number;
  description: string;
  onPress: () => void;
  image: string;
}

const InventoryItem: React.FC<ItemProps> = ({
  name,
  totalStock,
  price,
  description,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={{}}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.detailsContainer}>
          <AppText style={styles.name} bold>
            {name}
          </AppText>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AppText style={styles.price} bold>
              ₦ {helpers.formatNumberWithCommas(price)}
            </AppText>
            <AppText style={styles.stock} bold>
              {helpers.formatNumberWithCommas(totalStock)} Pcs
            </AppText>
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
    gap: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  price: {
    color: colors.primary,
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
    marginTop: 10,
    fontSize: 16,
  },
});

export default InventoryItem;
