import React, { useEffect } from "react";
import { Alert, Image, TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "iconsax-react-native";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

const ImageInput = ({
  imageUri,
  onChangeImage,
}: {
  imageUri: string;
  onChangeImage: (uri: string | null) => void;
}) => {
  const requestPermission = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();

      if (!granted) {
        Alert.alert("You need to enable permission to access the library");
      }
    } catch (error) {
      console.error("Error requesting camera permissions: ", error);
      Alert.alert("Error requesting camera permissions");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image");
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        { text: "No" },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <Camera size="32" color={colors.medium} variant="Bold" />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
