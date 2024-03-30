import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

interface TextProps {
  children: React.ReactNode;
  style?: Record<string, any>;
  bold?: boolean;
  centered?: boolean;
}

const AppText: React.FC<TextProps> = ({ children, style, bold, centered }) => {
  return (
    <Text
      style={[
        styles.text,
        bold && styles.bold,
        centered && styles.centered,
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 2,
    color: colors.black,
    fontFamily: "Mulish_400Regular",
  },
  bold: {
    fontFamily: "Mulish_700Bold",
  },
  centered: {
    textAlign: "center",
  },
});

export default AppText;
