import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const BasketBottom = () => {
    const {basketData}=useContext(DataContext)
  return (
    <div>
      <div className="basket">
        <div className="pickup">
          <span>Pickup store</span>
          <Link to="/store-locator">
            Oasis Travel Center{" "}
            <i>
              <IoClose />
            </i>
          </Link>
        </div>
        <div className="basket-img">
          <Link to="/menu/cart">
            <img
              src="https://www.starbucks.com/app-assets/d21adfaa60a934de88eb1cc00c315e52.svg"
              alt=""
            />
          </Link>

          <h1 > {basketData.length} </h1>
        </div>
      </div>
    </div>
  );
};

export default BasketBottom;
