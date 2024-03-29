import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

const FormButton = ({ title }: { title: string }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default FormButton;
