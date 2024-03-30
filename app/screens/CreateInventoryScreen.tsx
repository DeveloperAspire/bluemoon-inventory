import { StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FormikHelpers } from "formik";
import { InventoryType } from "../services/helpers";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Screen from "../components/Screen";
import Form from "../components/forms/AppForm";
import FormField from "../components/forms/FormField";
import FormButton from "../components/forms/FormButton";
import FormImagePicker from "../components/forms/FormImagePicker";
import helpers from "../services/helpers";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  stock: Yup.number().required().min(1).max(10000).label("Total Stock"),
  description: Yup.string().required().min(3).label("Item Description"),
  image: Yup.string().required().min(1).label("Please select an image"),
});

const CreateInventoryScreen = ({ navigation }: { navigation: any }) => {
  const handleSubmit = async (
    values: Omit<InventoryType, "id">,
    { resetForm }: FormikHelpers<Omit<InventoryType, "id">>
  ) => {
    const id = helpers.generateRandomId(8);

    helpers.addInventoryItem({ ...values, id });

    navigation.navigate("Home");

    resetForm();
  };
  return (
    <Screen style={styles.container}>
      <KeyboardAwareScrollView
        extraHeight={100}
        showsVerticalScrollIndicator={false}
      >
        <Form
          initialValues={{
            name: "",
            price: 0,
            description: "",
            stock: 0,
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
            placeholder="Enter item description"
            type="text"
            label="Description"
            autoFocus={false}
          />
          <FormButton title="Save" />
        </Form>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default CreateInventoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
