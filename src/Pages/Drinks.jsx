import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/drink.css";
import Drinkssidebar from "../components/sidebar/Drinkssidebar";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/coffee/?subcategory=${id}`).then((res) => {
      setDrinks(res.data);
    });
  }, [id]);

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
      <div className="product">
        <div className="container">
          <div className="product-menu">
            <Drinkssidebar />
            <div className="drinks-filter-right ">
              <div className="breadcrumb">
                <Link to="/Menu">
                  <h1>menu / </h1>
                </Link>
                <span> {id} </span>
              </div>
              <div className="drinks-filter">
                <h2>{id}</h2>
                <div className="drinks-grid-filter">
                  {drinks.map((item) => (
                    <div key={item.id} className="drinks-item-filter">
                      <NavLink to={`/Menu/product/subcategory/${item.id}`}>
                        <div className="imgg">
                          <img src={item.img} alt="" />
                        </div>
                        <h3>{item.name}</h3>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Drinks;
