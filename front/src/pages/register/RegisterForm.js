import React from "react";
import { Formik } from "formik";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";

function RegisterForm() {
  const styles = ownStyles();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} style={styles.parent}>
          <CustomInput
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            label="email"
          />
          {errors.email && touched.email && errors.email}
          <CustomInput
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            label="password"
          />
          {errors.password && touched.password && errors.password}
          <CustomButton
            style={styles.button}
            type="submit"
            disabled={isSubmitting}
            label="Inscription"
            end
          />
        </form>
      )}
    </Formik>
  );
}

const ownStyles = () => ({
  parent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "100%",
  },
});

export default RegisterForm;
