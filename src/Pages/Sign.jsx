import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { NavLink } from "react-router-dom";
import "../styles/sign.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const validationSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Enter an email/username."),
  password: Yup.string().required("Enter a password."),
});

const Sign = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div>
      <div className="parent">
        <div className="container">
          <div className="header">
            <div className="img">
              <NavLink to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/446px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-center-h1">
        <h1>Sign in or create an account</h1>
      </div>

      <div className="sign-center-box">
        <div className="sign-box">
          <p>* indicates required field</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="inputs">
                  <Field
                    className={`form-control ${
                      errors.usernameOrEmail && touched.usernameOrEmail
                        ? "error"
                        : ""
                    }`}
                    type="text"
                    name="usernameOrEmail"
                    placeholder="* Username or email adress"
                  />
                  <ErrorMessage
                    name="usernameOrEmail"
                    component="div"
                    className="errorr"
                  />
                </div>
                <div className="eye-flex inputs">
                  <Field
                    className={`form-control ${
                      errors.password && touched.password ? "error" : ""
                    }`}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="* Password"
                  />

                  <div className="eye-icon" onClick={togglePasswordVisibility}>
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </div>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="errorr"
                />
                <div className="sign-check">
                  <Field
                    type="checkbox"
                    id="myCheckbox"
                    className="custom-checkbox"
                  />
                </div>
                <button type="submit">Giriş Yap</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sign;
