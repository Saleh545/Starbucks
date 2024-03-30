import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

const Coffee = () => {
  const [coffee, setCoffee] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:3000/coffee?/${id}`).then((res) => {
        setCoffee(res.data);
        console.log(res.data);
      });
  }, [id]);

  return (
    <div>
      <Header />

      {coffee.map((item) => (
        <div key={item.id} className="coffees">
            
            <div className="imhgg">

          <img src={item.img} alt="Coffee" />
          <h3>{item.name}</h3>
            </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Coffee;
