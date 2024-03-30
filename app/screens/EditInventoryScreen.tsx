import { StyleSheet, Alert } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StackScreenProps } from "@react-navigation/stack";

import helpers from "../services/helpers";

import Form from "../components/forms/AppForm";
import FormField from "../components/forms/FormField";
import FormButton from "../components/forms/FormButton";
import AppButton from "../components/AppButton";
import FormImagePicker from "../components/forms/FormImagePicker";
import { FormikHelpers } from "formik";
import { InventoryType } from "../services/helpers";
import { StackParamList } from "../navigation/HomeNavigator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  stock: Yup.number().required().min(1).max(10000).label("Total Stock"),
  description: Yup.string().required().min(3).label("Description"),
  image: Yup.string().required().min(1).label("Please select an image"),
});

type Props = StackScreenProps<StackParamList, "EditInventory">;

const EditInventoryScreen: React.FC<Props> = ({ route, navigation }) => {
  const inventoryData = route.params;

  const handleSubmit = async (
    values: Omit<InventoryType, "id">,
    { resetForm }: FormikHelpers<Omit<InventoryType, "id">>
  ) => {
    helpers.updateInventoryItem(inventoryData.id, { ...values });

    navigation.goBack();

    resetForm();
  };

  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this item?", [
      {
        text: "Yes",
        onPress: () => {
          helpers.deleteInventoryItem(inventoryData.id);
          navigation.goBack();
        },
      },
      { text: "No" },
    ]);
  };

  return (
    <Screen style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={100}
        showsVerticalScrollIndicator={false}
      >
        <Form
          initialValues={{
            name: inventoryData.name,
            price: inventoryData.price,
            description: inventoryData.description,
            stock: inventoryData.stock,
            image: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="image" />

          <FormField
            name="name"
            placeholder="Enter item name"
            label="Name"
            type="text"
            autoFocus
          />
          <FormField
            keyboardType="numeric"
            name="price"
            placeholder="Enter item price"
            type="text"
            label="Price"
            autoFocus={false}
          />
          <FormField
            keyboardType="numeric"
            name="stock"
            placeholder="Enter total stock of item"
            type="text"
            label="Total Stock"
            autoFocus={false}
          />

          <FormField
            name="description"
            numberOfLines={3}
            placeholder="Enter item description"
            type="text"
            label="Description"
            autoFocus={false}
          />
          <FormButton title="Save Edit" />
          <AppButton title="Delete" onPress={() => handleDelete()} />
        </Form>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default EditInventoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
