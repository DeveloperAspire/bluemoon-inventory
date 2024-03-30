import React from "react";
import { useFormikContext } from "formik";
import ImageInput from "./ImageInput";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }: { name: string }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<any>();
  const imageUri = values[name];

  const handleAdd = (uri: string | null) => {
    setFieldValue(name, uri);
  };

  return (
    <>
      <ImageInput imageUri={imageUri} onChangeImage={handleAdd} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
