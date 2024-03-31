import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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
              <h4>330 calories <span><IoIosInformationCircleOutline /></span></h4>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Coffee;
