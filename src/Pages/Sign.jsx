import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { Link, NavLink } from "react-router-dom";
import "../styles/sign.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import TextField from "@mui/material/TextField";


const Sign = () => {
  const validationSchema = Yup.object().shape({
    usernameOrEmail: Yup.string().required(" ⊗ Enter an email/username."),
    password: Yup.string().required(" ⊗ Enter a password."),
  });
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
            onSubmit={handleSubmit}>
            {({ errors, touched }) => (
              
              <Form>
              

                <div className="gift-inputs">
                        <Field
                          as={TextField}
                          fullWidth
                          label="* Username or email adress "
                          name="usernameOrEmail"
                          id="senderName"
                          className={`form-control ${
                            errors.usernameOrEmail && touched.usernameOrEmail
                              ? "error"
                              : ""
                          }`}
                          type="text"
                        />
                        <ErrorMessage
                          name="usernameOrEmail"
                          component="div"
                          className="errorr"
                        />
                      </div>








               






                <div className=" eye-flex gift-inputs">
                        <Field
                          as={TextField}
                          fullWidth
                          label="* Password "
                          name="password"
                          id="senderName"
                          className={`form-control ${
                            errors.password && touched.password
                              ? "error"
                              : ""
                          }`}
                          type="text"
                        />
                         <div className="eye-icon" onClick={togglePasswordVisibility}>
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="errorr"
                        />
                      </div>







                <div className="sign-check">
                  <Field
                    type="checkbox"
                    id="myCheckbox"
                    className="custom-checkbox"/>
                    <p>Keep me signed in.</p>
                    <Link>Details</Link>
                </div>

                <div className="forgot">
                  <Link>Forgot your username?</Link>
                  <Link>Forgot your password?</Link>
                </div>
                <div className="sign-button">

                <button type="submit">Sign in</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="sign-text-center">
        <div className="container">
<div className="sign-center-size">

        <h2>JOIN STARBUCKS® REWARDS</h2>
        <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
        <button>Join now</button>
</div>
      </div>
        </div>
      <Footer/>
    </div>
  );
};

export default Sign;
