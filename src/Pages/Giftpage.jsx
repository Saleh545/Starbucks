import axios from "axios";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/giftpage.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { GrShare } from "react-icons/gr";

const Giftpage = () => {
  const validationSchema = Yup.object().shape({
    recipient: Yup.string().required(" ⊗ Please enter the recipient's name."),
    recipientEmail: Yup.string().required(" ⊗ Please enter the recipient's email."),
    senderName: Yup.string().required("⊗ Please enter the sender's name."),
    senderEmail: Yup.string().required("⊗ Please enter the sender's email."),
  });

  const [giftCategory, setGiftCategory] = useState([]);
  const [gift, setGift] = useState([]);
  const { id, category } = useParams();
  const [textValue, setTextValue] = useState("");

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/giftcard?category=${category}`)
      .then((res) => {
        setGiftCategory(res.data);
        // console.log(res.data);
        setGift(res.data[0]?.cards?.find((item) => item.id === id));
      });
  }, [id]);
  return (
    <div>
      <Header />
      <div className="g-page">
        <div className="container">
          <div className="gift-items">
            <div className="gift-item">
              <div className="g-text-img">
                <div className="breadcrumb">
                  <Link to="/Gift">Gift </Link>
                  <p> / Create eGift</p>
                </div>
                <h5>Create eGift</h5>

                <div className="g-img">
                  <img src={gift.img} alt="" />
                </div>
                <span>* indicates required field</span>
              </div>
              <div className="amount">
                <h3>Gift amount</h3>
                <Formik>
                  <Form>
                    <fieldset>
                      <legend>*Select gift amount</legend>
                      <Field as="select" name="option" id="option">
                        <option value="Extra Milk Foam">10$</option>
                        <option value="Light Milk Foam">25$</option>
                        <option value="No Milk Foam">50$</option>
                        <option value="Milk Foam">100$</option>
                        <option value="Custom amount">Custom amount</option>
                      </Field>
                    </fieldset>
                  </Form>
                </Formik>
              </div>
              <div className="giftin">
                <h3>Who are you gifting to?</h3>
                <Formik
                  validationSchema={validationSchema}
                  initialValues={{ recipient: "" }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="gift-inputs">
                        <Field
                          as={TextField}
                          fullWidth
                          label="* Recipient Name"
                          name="recipient"
                          id="recipient"
                          className={`form-control ${
                            errors.recipient && touched.recipient ? "error" : ""
                          }`}
                          type="text"
                        />
                        <ErrorMessage
                          name="recipient"
                          component="div"
                          className="errorr"
                          label="* Recipient Name"
                        />
                      </div>

                      <div className="gift-inputs">
                        <Field
                          as={TextField}
                          fullWidth
                          label="* Recipient Email"
                          name="recipientEmail"
                          id="recipientEmail"
                          className={`form-control ${
                            errors.recipientEmail && touched.recipientEmail
                              ? "error"
                              : ""
                          }`}
                          type="text"
                        />
                        <ErrorMessage
                          name="recipientEmail"
                          component="div"
                          className="errorr"
                          label="* Recipient Email"
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="max-rec">
                <h5>Maximum of 10 recipients</h5>
                <button>Add another recipient</button>
              </div>

              <div className="giftin">
                <h3>Personal note</h3>

                <Formik>
                  <Form>
                    <div className="gift-inputs optional">
                      <TextField
                        fullWidth
                        label="Message (optional)"
                        name="optionel"
                        value={textValue}
                        onChange={handleChange}
                      />
                      <h5
                        style={{
                          textAlign: "right",
                          fontSize: "12px",
                          color: "#666",
                        }}
                      >
                        {textValue.length} / 160
                      </h5>
                    </div>
                  </Form>
                </Formik>
              </div>

              <div className="giftin">
                <h3>From</h3>
                <Formik
                  validationSchema={validationSchema}
                  initialValues={{ senderName: "" }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="gift-inputs">
                        <Field
                          as={TextField}
                          fullWidth
                          label="* Sender Name "
                          name="senderName"
                          id="senderName"
                          className={`form-control ${
                            errors.senderName && touched.senderName
                              ? "error"
                              : ""
                          }`}
                          type="text"
                        />
                        <ErrorMessage
                          name="senderName"
                          component="div"
                          className="errorr"
                          label="* senderName Name"
                        />
                      </div>

                      <div className="gift-inputs">
                        <Field
                          as={TextField}
                          fullWidth
                          label="* Sender Email"
                          name="senderEmail"
                          id="senderEmail"
                          className={`form-control ${
                            errors.senderEmail && touched.senderEmail
                              ? "error"
                              : ""
                          }`}
                          type="text"
                        />
                        <ErrorMessage
                          name="senderEmail"
                          component="div"
                          className="errorr"
                          label="* Sender Email"
                        />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="purchasing">
          <div className="purchasing-text">

          <h4>
            <img src="/images/Screenshot%202024-04-22%20003112.png" alt="" />
            By purchasing this eGift, I have read and agree to the Starbucks
            Card Terms & Conditions.
          </h4>
          <Link>
            Card Terms & Conditions
            <GrShare />
          </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Giftpage;
