import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
const Giftpage = () => {
  const [giftCategory, setGiftCategory] = useState([]);
  const [gift, setGift] = useState([]);
  const { id,category } = useParams();
  console.log(id);
  console.log(category);
  useEffect(() => {
    axios.get(`http://localhost:3000/giftcard?category=${category}`).then((res) => {
      setGiftCategory(res.data);
      console.log(res.data);
      setGift(res.data[0]?.cards?.find(item=>item.id===id))
    });
  }, [id]);
  return (
    <div>
      <Header />
      <img src={gift.img} style={{width:"300px"}} alt="" />
      
      <Footer />
    </div>
  );
};
export default Giftpage;
