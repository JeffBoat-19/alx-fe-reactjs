import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 chars").required("Password required"),
});

const FormikForm = () => {
  const handleSubmit = (values) => {
    console.log("Submitted:", values);
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form">
        <h2>Register (Formik)</h2>
        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" className="error" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" className="error" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" className="error" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
