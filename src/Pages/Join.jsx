import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { GrShare } from "react-icons/gr";
import Footer from "../components/footer/Footer";
import "../styles/join.css";

// Form validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  usernameOrEmail: Yup.string().required("Enter an email/username."),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must be at most 25 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character such as !@#$%^&*(),.?\":{}|<>"
    ),
});

const Join = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Initial form values
  const initialValues = {
    firstName: "",
    lastName: "",
    usernameOrEmail: "",
    password: "",
  };

  // Form submission handler
  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div>
      {/* Header section */}
      <div className="parent">
        {/* Header container */}
        <div className="container">
          <div className="header">
            <div className="img">
              <Link to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/446px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sign up form section */}
      <div className="sign-center-h1 join-center-h1">
        <h1>Create an account</h1>
        <h5>STARBUCKS® REWARDS</h5>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any
          way you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <Link>more.</Link>
        </p>
      </div>

      {/* Sign up form */}
      <div className="sign-center-box">
        <div className="join-box">
          <p>* indicates required field</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                {/* Personal Information */}
                <h3>Personal Information</h3>
                <div className="inputs">
                  <Field
                    placeholder="* First name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`form-control ${
                      errors.firstName && touched.firstName ? "error" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="errorr"
                  />
                </div>
                <div className="inputs">
                  <Field
                    placeholder="* Last name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`form-control ${
                      errors.lastName && touched.lastName ? "error" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="errorr"
                  />
                </div>

                {/* Account Security */}
                <div className="inputs">
                  <h4>Account Security</h4>
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
                  <p className="input-btm">This will be your username</p>
                </div>

                {/* Password */}
                <div className="eye-flex inputs">
                  <Field
                    className={`form-control ${
                      errors.password && touched.password ? "error" : ""
                    }`}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="* Password"
                  />
                  <div
                    className="eye-icon eye-icon-join"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </div>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="errorr"
                />
                <p className="input-btm">
                  Create a password 8 to 25 characters long that includes at
                  least 1 uppercase and 1 lowercase letter, 1 number and 1
                  special character like an exclamation point or asterisk.
                </p>

                {/* Additional Information */}
                <div className="join-bottom">
                  <Link>Already have a Starbucks gift card?</Link>
                  <h2>COLLECT MORE STARS & EARN REWARDS</h2>
                  <p>Email is a great way to know about offers and what’s new from Starbucks.</p>
                </div>

                {/* Email Subscription */}
                <div className="sign-check">
                  <div className="chekbox">
                    <Field
                      type="checkbox"
                      id="myCheckbox"
                      className="custom-checkbox"
                    />
                  </div>
                  <p className="yes">Yes, I’d like email from Starbucks</p>
                </div>
                <p className="know">Know about initiatives, announcements and product offers.</p>
                <h6>TERMS OF USE</h6>

                {/* Terms of Use */}
                <div className="sign-checkk">
                  <div className="chekbox">
                    <Field
                      type="checkbox"
                      id="myCheck"
                      className="custom-checkbox"
                    />
                  </div>
                  <div className="join-bottom">
                    <span>
                      * I agree to the <Link>Starbucks® Rewards Terms <i><GrShare /></i></Link>and the <Link>Starbucks Card Terms<i><GrShare /></i></Link> and have read the <Link>Starbucks Privacy Statement.<i><GrShare /></i></Link>
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <div className="sign-button">
                  <button type="submit">Create account</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Join;
