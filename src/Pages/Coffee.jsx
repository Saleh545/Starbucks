import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import { Formik, Form, Field } from "formik";
import "../styles/coffee.css";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Coffee = () => {
  const [coffee, setCoffee] = useState([]);
  const { id } = useParams();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/coffee?id=${id}`).then((res) => {
      setCoffee(res.data);
      console.log(res.data);
    });
  }, [id]);
  return (
    <div>
      <Header />
      {coffee.map((item) => (
        <div key={item.id} className="coffees">
          <div className="breadcrumb">
            <Link to="/Menu">
              <h1>menu / </h1>
            </Link>
            <Link to="/Menu">
              <h1>{item.subcategory} / </h1>
            </Link>
            <span> {item.name} </span>
          </div>

          <div className="coffee-item">
            <div className="coffee-img">
              <img src={item.img} alt="Coffee" />
            </div>
            <div className="coffee-text">
              <h3>{item.name}</h3>

              <h4>
                330 calories{" "}
                <span>
                  <IoIosInformationCircleOutline />
                </span>
              </h4>
            </div>
          </div>
        </div>
      ))}

      <div className="coffe-options">
        <div className="container">
          <div className="coffee-flex">
            <div className="coffee-left">
              <h5>Size options</h5>
              {coffee.map((item, index) => (
                <ul key={index}>

                  {item.sizes.map((size, sizeIndex) => (
                    <li key={sizeIndex}>
                      <NavLink>
                        <img
                          src="https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg"
                          alt=""
                        />
                        <div>
                          <p>{size.size}</p>
                          <span>{size.capacity}</span>
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="coffee-right">
              <h5>What's included</h5>
              <Formik
                initialValues={{ option: "" }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ values }) => (
                  <Form>
                    <fieldset>
                      <legend>Milk</legend>
                      <Field as="select" name="option" id="option">
                        <option value="Extra Milk Foam">Extra Milk Foam</option>
                        <option value="Light Milk Foam">Light Milk Foam</option>
                        <option value="No Milk Foam">No Milk Foam</option>
                        <option value="Milk Foam">Milk Foam</option>
                      </Field>
                    </fieldset>

                    <fieldset>
                      <legend>Add-ins</legend>
                      <Field as="select" name="option1" id="option">
                        <option value="Extra Ice">Extra Ice</option>
                        <option value="Light Ice">Light Ice</option>
                        <option value="No ice">No ice</option>
                        <option value="Ice">Ice</option>
                      </Field>
                    </fieldset>
                    <fieldset>
                      <legend>Add-ins</legend>
                      <div className="ins-flex">
                        <p>Strawberries scoops</p>
                        <div className="counter">
                          <i onClick={() => setCount(Math.max(count - 1, 0))}>
                            <CiCircleMinus />
                          </i>
                          <span>{count}</span>
                          <i onClick={() => setCount(count + 1)}>
                            <CiCirclePlus />
                          </i>
                        </div>
                      </div>
                    </fieldset>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coffee;
