import { StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Form from "../components/forms/AppForm";
import FormField from "../components/forms/FormField";
import FormButton from "../components/forms/FormButton";
import AppButton from "../components/AppButton";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  stock: Yup.number().required().min(1).max(10000).label("Total Stock"),
  description: Yup.string().required().min(3).label("Description"),
  image: Yup.string().required().min(1).label("Please select an image"),
});

const EditInventoryScreen = () => {
  const handleSubmit = async () => {
    //     resetForm();
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
            price: "",
            description: "",
            stock: "",
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
          <AppButton title="Delete" onPress={() => console.log("DELETE")} />
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
