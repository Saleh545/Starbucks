import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import Slider from "react-slick";
import "../styles/gift.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gift = () => {  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/giftcard").then((res) => {
      setData(res.data);
      console.log(res.data)
    });
    
  }, []);  
  const featuredCategory = data.find((category) => category.category === "Featured");
  const easterCategory = data.find((category) => category.category === "Easter");
  const siblingCategory = data.find((category) => category.category === "Sibling Appreciation");
  const petCategory = data.find((category) => category.category === "Pet day");
  const springCategory = data.find((category) => category.category === "Spring");
  const appreciationCategory = data.find((category) => category.category === "Appreciation");
  const adminCategory = data.find((category) => category.category === "Admin Appreciation");
  
  let settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Header />
      <div className="carousel">
  {featuredCategory && (
    <div>
      <h2>{featuredCategory.category}</h2>
      <Link className="see-all">{featuredCategory.see}</Link>
    </div>
  )}

  <Slider {...settings}>
    {featuredCategory && featuredCategory.cards.map((card) => (
      <div key={card.id} className="box">
        <Link to={`/Gift/${featuredCategory.category}/${card.id}`}>
          <img src={card.img} alt="" />
        </Link>
      </div>
    ))}
  </Slider>
</div>



      <div className="effor">
        <div className="container">
          <div className="effor-text">
            <img
              src="	https://www.starbucks.com/weblx/images/gift/group-gift-cards.png"
              alt=""
            />
            <p>
              New! Effortlessly send up to 10 eGifts per purchase. Select a
              design to start!
            </p>
          </div>
        </div>
      </div>
      <div className="received">
        <div className="received-flex">
          <h1>Received a gift card?</h1>

          <p>
            Earns 2<span>★</span> per $1
          </p>
          <div className="rec-button">
            <Link className="add">Add or Reload</Link>
            <Link className="check">Check balance</Link>
          </div>
        </div>
        <Link className="bottom-link">Card Terms & Conditions</Link>
      </div>

      <div className="carousel">
  {easterCategory && (
    <div>
      <h2>{easterCategory.category}</h2>
      <Link  className="see-all">{easterCategory.see}</Link>
    </div>
  )}

  <Slider {...settings}>
    {easterCategory && easterCategory.cards.map((card) => (
      <div key={card.id} className="box">
        <Link to={`/Gift/${card.id}`}>
          <img src={card.img} alt="" />
        </Link>
      </div>
    ))}
  </Slider>
</div>
<div className="carousel">
  {siblingCategory && (
    <div>
      <h2>{siblingCategory.category}</h2>
      <Link  className="see-all">{siblingCategory.see}</Link>
    </div>
  )}

  <Slider {...settings}>
    {siblingCategory && siblingCategory.cards.map((card) => (
      <div key={card.id} className="box">
        <Link to={`/Gift/${card.id}`}>
          <img src={card.img} alt="" />
        </Link>
      </div>
    ))}
  </Slider>
</div>
<div className="carousel">
  {petCategory && (
    <div>
      <h2>{petCategory.category}</h2>
      <Link  className="see-all">{petCategory.see}</Link>
    </div>
  )}

  <Slider {...settings}>
    {petCategory && petCategory.cards.map((card) => (
      <div key={card.id} className="box">
        <Link to={`/Gift/${card.id}`}>
          <img src={card.img} alt="" />
        </Link>
      </div>
    ))}
  </Slider>
</div>
<div className="carousel">
  {springCategory && (
    <div>
      <h2>{springCategory.category}</h2>
      <Link className="see-all">{springCategory.see}</Link>
    </div>
  )}

  <Slider {...settings}>
    {springCategory && springCategory.cards.map((card) => (
      <div key={card.id} className="box">
        <Link to={`/Gift/${card.id}`}>
          <img src={card.img} alt="" />
        </Link>
      </div>
    ))}
  </Slider>
</div>
<div className="carousel">
  {appreciationCategory && (
    <div>
      <h2>{appreciationCategory.category}</h2>
      <Link  className="see-all">{appreciationCategory.see}</Link>
    </div>
  )}

  <Slider {...settings}>
    {appreciationCategory && appreciationCategory.cards.map((card) => (
      <div key={card.id} className="box">
        <Link to={`/Gift/${card.id}`}>
          <img src={card.img} alt="" />
        </Link>
      </div>
    ))}
  </Slider>
</div>
<div className="carousel">
  {adminCategory && (
    <div>
      <h2>{adminCategory.category}</h2>
      <Link  className="see-all">{adminCategory.see}</Link>
    </div>
  )}

  <Slider {...settings}>
    {adminCategory && adminCategory.cards.map((card) => (
      <div key={card.id} className="box">
        <Link to={`/Gift/${card.id}`}>
          <img src={card.img} alt="" />
        </Link>
      </div>
    ))}
  </Slider>
</div>

      <div className="gifting">
        <div className="container">
          <div className="gifting-flex">
            <div className="gif-img">
              <img
                src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg"
                alt=""
              />
            </div>
            <div className="gif-text">
              <h5>Business gifting — simplified</h5>
              <p>
                Bulk send physical or digital Starbucks Cards to gift, reward,
                incentivize, or show appreciation towards your customers,
                clients and team members. Minimum 15 cards per order.
              </p>
              <Link>Shop now</Link>
            </div>
          </div>
        </div>
        <div className="support">
          <div className="container">
            <h4>GIFT CARD SUPPORT</h4>
            <p>
              Use the links below to manage eGifts you have sent or received, or
              view our full Card Terms & Conditions.
            </p>
          </div>
          <div className="button-flex">
            <Link>eGift Support</Link>
            <Link>See Terms & Conditions</Link>
            <Link>eGift FAQs</Link>
          </div>
        </div>
      </div>
      <div className="footer-left">
        <Footer />
      </div>
    </div>
  );
};

export default Gift;
