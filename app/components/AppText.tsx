import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

interface TextProps {
  children: React.ReactNode;
  style?: Record<string, any>;
}

const AppText: React.FC<TextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 2,
    color: colors.black,
    fontFamily: "Mulish_400Regular",
  },
});

export default AppText;
