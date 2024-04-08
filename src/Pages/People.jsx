import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/people.css";
const People = () => {
  return (
    <div>
      <Header />
      <div className="people">
        <div className="container">
          <div className="p-text-center">
            <h2>PUTTING PEOPLE FIRST</h2>
            <p>
              We’re investing in the well-being of those we connect with,
              working hard toward a better future.
            </p>
          </div>
          <div className="card">
            <div className="left">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73340.jpg"
                alt=""
              />
            </div>
            <div className="right right2">
              <div className="text text2">
                <h1>Inclusion & Diversity</h1>
                <p>
                  Our commitment to equal opportunity means cultivating an
                  environment where differences are embraced and building a
                  culture that fosters a sense of belonging.
                </p>
                <button>Find examples</button>
              </div>
            </div>
          </div>

          <div className="card reverse-cart">
            <div className="left">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73341.jpg"
                alt=""
              />
            </div>
            <div className="right right2">
              <div className="text text2">
                <h1>Opportunity</h1>
                <p>
                  We put our partners (employees) first, empowering them by
                  providing meaningful opportunities to pursue their
                  aspirations.
                </p>
                <button>Read stories</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73342.jpg"
                alt=""
              />
            </div>
            <div className="right right2">
              <div className="text text2">
                <h1>Community</h1>
                <p>
                  Across the globe, we serve to strengthen each community we are
                  part of by being the neighbor every neighborhood wants.
                </p>
                <button>See how</button>
              </div>
            </div>
          </div>

          <div className="p-text-center">
            <h2>SEE WHAT’S NEXT</h2>
            <p>
              Follow the latest ways we’re supporting and strengthening the
              people around us.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default People;
