import React, { useEffect, useState } from "react";
import "../Menu/menu.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Drinkssidebar from "../sidebar/Drinkssidebar";
import { IoClose } from "react-icons/io5";


const MenuItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/category").then((res) => {
      setData(res.data);
    });
  }, []);

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
            <Drinkssidebar/>
            <div className="drinks-right">
              <h1>menu</h1>
              <div className="drinks">
                <h2>Drinks</h2>
                <div className="drinks-grid">
                  {data.map((item) => (
                    <div key={item.id} className="drinks-item">
                      <NavLink to={`drinks/${item.title}`}>
                        <div className="imgg">
                          <img src={item.img} alt="" />
                        </div>
                        <h3>{item.title}</h3>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="basket">
        <div className="pickup">
          <span>Pickup store</span>
          <h3>Oasis Travel Center <i><IoClose /></i></h3>
        </div>
        <div className="basket-img">
          <Link to="/menu/cart"><img src="https://www.starbucks.com/app-assets/d21adfaa60a934de88eb1cc00c315e52.svg" alt="" /></Link>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
