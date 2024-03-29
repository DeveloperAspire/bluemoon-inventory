import React from "react";

import { Formik } from "formik";

interface FormProps {
  children: React.ReactNode;
  initialValues: Record<string, any>;
  onSubmit: (FormikValues: Record<string, any>) => void;
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
