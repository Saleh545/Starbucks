import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import Slider from "react-slick";
import "../styles/gift.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gift = () => {
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
        <h2>featured</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
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
        <h2>EASTER | 3/31</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>BIRTHDAY</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>THANK YOU</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>CELEBRATION</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>SPRING</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>APPRECIATION</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>ENCOURAGEMENT</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>WORKPLACE</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>AFFECTION</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
      <div className="carousel">
        <h2>ANYTIME</h2>

        <Slider {...settings}>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                alt=""
              />
            </Link>
          </div>

          <div className="box">
            <Link to="/Gift">
              <img
                src="https://globalassets.starbucks.com/digitalassets/cards/fy24/HappyEasterEggsFY24.png"
                alt=""
              />
            </Link>
          </div>
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
