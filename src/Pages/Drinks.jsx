import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

        <img src={img} alt="Drink" />
        <h1>{drink.name}</h1>
    </div>
  )
};

export default Drinks;
