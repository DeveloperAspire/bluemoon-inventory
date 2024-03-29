import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

interface InputProps {
  placeholder: string;
  label: string;
  type: "text";
  value: any;
  onChangeText: any;
  onBlur: any;
  autoFocus?: boolean;
}

const AppTextInput: React.FC<InputProps> = ({
  autoFocus,
  placeholder,
  label,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          autoFocus={autoFocus}
          placeholderTextColor={colors.medium}
          {...otherProps}
        />
      </View>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    borderWidth: 1.5,
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 10,
    width: "100%",
    borderColor: colors.light,
    backgroundColor: colors.light,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
});
