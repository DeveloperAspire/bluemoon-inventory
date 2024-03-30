import React from "react";

import { Formik, FormikHelpers } from "formik";
import { InventoryType } from "../../services/helpers";

type InitialValues = Omit<InventoryType, "id">;
interface FormProps {
  children: React.ReactNode;
  initialValues: InitialValues;
  onSubmit: (
    values: InitialValues,
    { resetForm }: FormikHelpers<InitialValues>
  ) => void;
  validationSchema?: Record<string, any>;
}

const AppForm: React.FC<FormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
