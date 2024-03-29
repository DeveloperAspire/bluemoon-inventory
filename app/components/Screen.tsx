import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

const Screen = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: Record<string, any>;
}) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
