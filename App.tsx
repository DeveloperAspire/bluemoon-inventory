import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./app/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  useFonts,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
} from "@expo-google-fonts/mulish";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Mulish_400Regular,
    Mulish_500Medium,
    Mulish_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigator />
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
