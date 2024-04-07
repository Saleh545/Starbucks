import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
const Giftpage = () => {
  const [gift, setGift] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/giftcard/?${id}`).then((res) => {
      setGift(res.data);
    //   console.log(res.data);
    });
  }, [id]);
  return (
    <div>
      <Header />
      {gift.map((item) => (
          <div key={item.id}>
            {/* {console.log(item)} */}
          {item.cards.map((data) => (
            <div key={data.id}>
              <img src={data.img} alt="" />
              {/* {console.log(data.img)} */}
            </div>
          ))}
        </div>
      ))}
      <Footer />
    </div>
  );
};
export default Giftpage;
