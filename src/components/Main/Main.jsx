import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="container">
      <div className="card">
          <div className="left">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88612.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <div className="text">
              <h1>You + Starbucks Rewards = ❤️</h1>
              
              <p>Sounds like a perfect match. Everything you need is in the app: download and start earning free drinks and more. Plus, enjoy mobile ordering and offers made just for you.</p>
              <button>Get the app</button>
            </div>
          </div>
        </div>


        <div className="card reverse-cart">
          <div className="left pink">

            <img className="two-img "
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88614.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <div className="text-two">
              <h1 className="two-text">What the heart wants</h1>
              
              <p className="two-p">Treat yourself and a friend to swirls of happiness and rich java chips with the new Chocolate-Covered Strawberry Crème Frappuccino® drink. Here for a limited time.</p>
              <button className="order">Order now</button>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="left">
            <img className="two-img"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88616.jpg"
              alt=""
            />
          </div>
          <div className="right brown">
            <div className="text">
              <h1 className="total">Totally smitten</h1>
              
              <p className="pinkp">Join your Val pal and indulge in the new Chocolate Hazelnut Cookie Cold Brew, a decadent coffee confection with chocolaty cookie crumbles. Here for a limited time.</p>
              <button className="button-brown">Order now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
