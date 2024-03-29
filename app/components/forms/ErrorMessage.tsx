import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";
import { FormikErrors, FormikTouched } from "formik";

interface MessageProps {
  error?: string | FormikErrors<any> | string[] | FormikErrors<any>[];
  visible?: boolean | FormikTouched<any> | FormikTouched<any>[];
}

const ErrorMessage: React.FC<MessageProps> = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error.toString()}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 14,
  },
});
