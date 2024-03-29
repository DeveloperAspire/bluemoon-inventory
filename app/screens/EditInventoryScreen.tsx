import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";

import Form from "../components/forms/AppForm";
import FormField from "../components/forms/FormField";
import FormButton from "../components/forms/FormButton";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  stock: Yup.number().required().min(1).max(10000).label("Total Stock"),
  description: Yup.string().min(3).label("Description"),
  //   images: Yup.array().min(1, "Please select atleast one image"),
});

const EditInventoryScreen = () => {
  const handleSubmit = async () => {
    //     resetForm();
  };
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          name: "",
          price: "",
          description: "",
          stock: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
          maxLength={255}
          multiline
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
    </Screen>
  );
};

export default EditInventoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
