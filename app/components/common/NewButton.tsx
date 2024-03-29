import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import { AddCircle } from "iconsax-react-native";

const NewButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AddCircle size={32} color="#FFff" variant="Outline" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 80,
    width: 80,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderRadius: 40,
    bottom: 20,
  },
});

export default NewButton;
