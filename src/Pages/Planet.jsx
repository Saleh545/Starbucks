import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/planet.css";
const Planet = () => {
  return (
    <div>
      <Header />
      <div className="people">
        <div className="container">
          <div className="p-text-center">
            <h2>BECOMING RESOURCE POSITIVE</h2>
            <p>
              We are committed to becoming resource positive – to give more than
              we take from the planet. We will store more carbon than we emit,
              eliminate waste and conserve and replenish more freshwater than we
              use.
            </p>
          </div>
          <div className="card">
            <div className="left">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73350.jpg"
                alt=""
              />
            </div>
            <div className="right right2">
              <div className="text text2">
                <h1>2030 COMMITMENTS</h1>
                <p>
                  Starbucks set a multi-decade commitment to reduce our carbon,
                  our water and our waste footprints by half by 2030.
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className="p-text-center">
            <h2>AREAS OF FOCUS</h2>
            <p>
              We’re driving innovation at scale to achieve our 2030 targets
              through these five focus areas:
            </p>
          </div>

          <div className="pl-flex">
            <div className="pl-img">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73351.png"
                alt=""
              />
            </div>
            <h2>Expanding plant-based menu options</h2>
          </div>
          <div className="pl-flex">
            <div className="pl-img">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73352.png"
                alt=""
              />
            </div>
            <h2>Shifting away from single-use to reusable packaging</h2>
          </div>
          <div className="pl-flex">
            <div className="pl-img">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73353.png"
                alt=""
              />
            </div>
            <h2>
              Investing in regenerative agriculture, reforestation, forest
              conservation and water replenishment in our supply chain
            </h2>
          </div>
          <div className="pl-flex">
            <div className="pl-img">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73354.png"
                alt=""
              />
            </div>
            <h2>Working on better ways to manage our waste</h2>
          </div>
          <div className="pl-flex">
            <div className="pl-img">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73355.png"
                alt=""
              />
            </div>
            <h2>
              Innovating with more responsible stores, operations, manufacturing
              and delivery
            </h2>
          </div>

          <div className="p-text-center  ">
            <h2 className="width50">PROGRESS TOWARD OUR COMMITMENTS</h2>
            <p>
              Starbucks is committed to transparency. Learn more about our
              commitments to the planet and our progress on our Environmental
              and Social Impact Reporting Hub.
            </p>
            <button>Learn more</button>
          </div>
          <div className="p-text-center  ">
            <h2 className="width50">ETHICAL SOURCING STANDARDS</h2>
            <p>
              Track the responsible ways we produce and purchase our coffee,
              tea, cocoa and manufactured goods.
            </p>
            <button>Learn more</button>
          </div>
          <div className="p-text-center">
            <h2>ALL THE LATEST</h2>
            <p>
              Stay up to date with Starbucks commitment to environmental
              sustainability.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Planet;
