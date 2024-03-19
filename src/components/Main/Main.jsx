import React from "react";
import "./Main.css";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="left">
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88612.jpg" alt=""/>
          </div>
          <div className="right">
            <div className="text">
              <h1>You + Starbucks Rewards = ❤️</h1>
              <p>
                Sounds like a perfect match. Everything you need is in the app:
                download and start earning free drinks and more. Plus, enjoy
                mobile ordering and offers made just for you.
              </p>
              <button>Get the app</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card reverse-cart">
          <div className="left pink">
            <img className="two-img " src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88614.jpg" alt=""/>
          </div>
          <div className="right">
            <div className="text-two text">
              <h1 className="two-text">What the heart wants</h1>
              <p className="two-p">
                Treat yourself and a friend to swirls of happiness and rich java
                chips with the new Chocolate-Covered Strawberry Crème
                Frappuccino® drink. Here for a limited time.
              </p>
              <button className="order">Order now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="left">
            <img className="two-img" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88616.jpg"alt=""/>
          </div>
          <div className="right brown">
            <div className="text">
              <h1 className="total">Totally smitten</h1>
              <p className="pinkp">
                Join your Val pal and indulge in the new Chocolate Hazelnut
                Cookie Cold Brew, a decadent coffee confection with chocolaty
                cookie crumbles. Here for a limited time.
              </p>
              <button className="button-brown">Order now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card reverse-cart">
          <div className="left pink">
            <img
              className="two-img "
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88294.jpg"
              alt=""
            />
          </div>
          <div className="right bck-blue">
            <div className="text-two text">
              <h1 className="two-text savory">Savory and satisfying</h1>

              <p className="two-p savory">
                Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the
                way.
              </p>
              <button className="order hover-blue">Order now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="left">
            <img
              className="two-img"
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88701.jpg"
              alt=""
            />
          </div>
          <div className="right blue-dark">
            <div className="text">
              <h1 className="total white ">Protein-packed goodness</h1>

              <p className="pinkp white fs-24">
                Enjoy the fluffy Egg White & Roasted Red Pepper Egg Bites and
                Bacon & Gruyère Egg Bites, both 300 calories or less.
              </p>
              <button className="button-blue white">Order now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card reverse-cart">
          <div className="left">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88575.jpg"
              alt=""
            />
          </div>
          <div className="right   green">
            <div className="text">
              <h1 className="white">“A smile makes a big difference.”</h1>

              <p className="white green-brenda">
                - Brenda, Starbucks Partner (Employee)
              </p>
              <p className="white">
                Our partners uplift each other and their communities every day.
              </p>
              <button className="white btn-green">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="container">
          <div className="text-center-flex">
            <h5>
              *At participating stores only. Some restrictions apply. Linked
              Card members will earn 2% Cash Back on the full purchase price of
              every Qualifying Purchase. Bonus Star offer excludes taxes and
              tips. Stars may not be earned on purchases of alcohol or on
              reloads of Starbucks Cards that are not registered. For full
              details, visit
              <a href="www.starbucks.com/bofa"> www.starbucks.com/bofa</a>. Bank
              of America, N.A. Member FDIC.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
