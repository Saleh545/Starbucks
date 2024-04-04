import React, { useEffect, useState } from "react";
import "../Menu/menu.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Drinkssidebar = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3000/category").then((res) => {
        setData(res.data);
      });
    }, []);
  return (
    <div>
           <div className="drinks-left">
              <ul>
                <li className="product-bottom">
                  <span>Drinks</span>

                  <ul className="product-flex">
                    {data.map((item) => (
                      <li key={item.id}>
                        <NavLink to={`/Menu/drinks/${item.title}`}>
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          
          </div>
    
  )
}

export default Drinkssidebar