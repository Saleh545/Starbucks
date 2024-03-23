import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

const Drinks = () => {
  const [drink, setDrink] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/coffee/${id}`)
      .then((res) => setDrink(res.data))
      .catch((error) => console.error("error data", error));
  }, [id]);

  if (!drink) return null;

  const { img } = drink;
  if (!img) return null;

  return (
    <div>
      <Header />
      <div className="menu-nav">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/">menu</NavLink>
            </li>
            <li>
              <NavLink to="/">featured</NavLink>
            </li>
            <li>
              <NavLink to="/">previous</NavLink>
            </li>
            <li>
              <NavLink to="/">favorites</NavLink>
            </li>
          </ul>
        </div>
      </div>
      
      <img src={img} alt="Drink" />
      <h1>{drink.name}</h1>
      <Footer />
    </div>
  );
};

export default Drinks;
