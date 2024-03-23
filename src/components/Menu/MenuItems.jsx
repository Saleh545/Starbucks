import React, { useEffect, useState } from "react";
import "../Menu/menu.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const MenuItems = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/coffee").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const Subcategories = [...new Set(data.map((item) => item.subcategory))];

  return (
    <div>
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
            <div className="drinks-left">
              <ul>
                <li className="product-bottom">
                  <span>Drinks</span>

                <ul className="product-flex">
  {Subcategories.map((subcategory,index) => (
    <li key={index}>
      <NavLink to={`/${subcategory.id}`} key={subcategory.id}>
        {subcategory}
      </NavLink>
    </li>
  ))}
</ul>

                </li>
              </ul>
            </div>
            <div className="drinks-right">
              <h1>menu</h1>

              <div className="drinks">
                <h2>Drinks</h2>
                <div className="drinks-grid">

                  {Subcategories.map((subcategory) => {
                    const item = data.find(
                      (item) => item.subcategory === subcategory
                    );


                    return (
                      <div key={item.id} className="drinks-item">

                        <NavLink to={`drinks/${item.id}`} key={item.id}>

                          <div className="imgg">
                            <img src={item.img} alt="" />
                          </div>
                          <h3>{item.subcategory}</h3>
                        </NavLink>
                      </div>
                    );
                  })}

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
