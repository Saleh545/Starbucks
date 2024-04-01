import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/coffee.css";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Coffee = () => {
  const [coffee, setCoffee] = useState([]);
  const { id } = useParams();

  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick1 = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/coffee?id=${id}`).then((res) => {
      setCoffee(res.data);
      // console.log(res.data);
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
              {item.sizes.map((size, index) => (
                <h4 key={index}> </h4>
              ))}
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
            <div className="coffe-left">
              <h5>Size options</h5>
              <ul>
                <li><NavLink><img src="	https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg" alt="" /><p>Tall</p><span>12 fl oz</span></NavLink></li>
                <li><NavLink><img src="	https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg" alt="" /><p>Grande</p><span>12 fl oz</span></NavLink></li>
                <li><NavLink><img src="https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg" alt="" /><p>Venti</p><span>12 fl oz</span></NavLink></li>
                <li><NavLink><img src="https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg" alt="" /><p>Trenta</p><span>12 fl oz</span></NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coffee;
