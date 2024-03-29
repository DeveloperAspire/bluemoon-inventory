import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface InputProps {
  placeholder: string;
  label: string;
  type: "text";
  name: string;
  autoFocus: boolean;
  defaultValue?: any;
  keyboardType?: any;
  [key: string]: any;
}

const FormField: React.FC<InputProps> = ({ name, ...otherProps }) => {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext<any>();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;
