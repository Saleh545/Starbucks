import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoIosSearch } from "react-icons/io";
import "../styles/customer.css";
import Slider from "react-slick";
import { GrFormNextLink } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";



let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Customer = () => {
  return (
    <div>
      <Header />
      <div className="customer">
        <div className="container">
          <h1>Starbucks Customer Service </h1>
          <div className="search-slider">
            <Formik
              initialValues={{ query: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <IoIosSearch style={{ marginRight: "10px" }} />

                <Field
                  type="text"
                  name="query"
                  placeholder="How can we help you?"
                  style={{}}
                />
                <ErrorMessage name="query" component="div" />
                {/* <button type="submit">Submit</button> */}
              </Form>
            </Formik>
            <div className="sug">
              <span>Suggestions:</span>
              <button>Missing stars</button>
              <button>Order was incomplete</button>
              <button>Apple Pay</button>
            </div>

            <div className="cus-slider">
              <Slider {...settings}>
                <div>
                  <div className="slider-text">
                    <h3>Coffee, Meet More Rewards</h3>
                    <p>
                      Link your Starbucks Rewards account with an eligible Bank
                      of America debit or credit card and enjoy exciting
                      benefits on qualifying in-app purchases. ...
                    </p>
                    <button>Read More</button>
                  </div>
                </div>

                <div>
                  <div className="slider-text">
                    <h3>More Sips, More Trips</h3>
                    <p>
                      Link your Delta SkyMiles® and Starbucks® Rewards accounts
                      to start earning 1 mile per $1* spent at Starbucks.
                      Through the partnership, Delta SkyMiles...
                    </p>
                    <button>Read More</button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="cus-card">
        <div className="container">
          <h2>
            Browse All Topics <GrFormNextLink />{" "}
          </h2>
          <div className="flex-cus">
            <div className="cus-card-grid">
              <div className="cus-img">
                <img src="public/images/img1.png" alt="" />
              </div>
              <div className="cus-img">
                <img src="public/images/img2.png" alt="" />
              </div>
              <div className="cus-img">
                <img src="public/images/img3.png" alt="" />
              </div>
              <div className="cus-img">
                <img src="public/images/img4.png" alt="" />
              </div>
              <div className="cus-img">
                <img src="public/images/img5.png" alt="" />
              </div>
              <div className="cus-img">
                <img src="public/images/img6.png" alt="" />
              </div>
            </div>

            <div className="cus-rewards">
              <h5>JOIN STARBUCKS® REWARDS</h5>
              <p>
                Join Starbucks® Rewards to earn free food and drinks, get free
                refills, pay and order with your phone, and more.
              </p>
              <button>Join now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="cus-bottom">
        <div className="container">
          <div className="cus-b-flex">
            <div className="cb-img">
              <img
                src="https://customerservice.starbucks.com/partnerGraphic.png"
                alt=""
              />
            </div>
            <div className="cb-text">
              <h4>Need to get in touch?</h4>
              <p>Our customer care team is here to save the day!</p>
              <div className="cb-btn">
                <button><MdMessage /> Chat with us </button>
                <button><BsFillTelephoneFill /> Give us a call </button>
                <button><RiMailSendLine /> Send us a message </button>
              </div>
              <p>Customer Service Hours</p>
              <h6>CHAT <p>7 days a week	</p> <p>4:00 a.m.–10:00 p.m. (Pacific)</p></h6>
              <h6>PHONE <p>7 days a week</p> <p>5:00 a.m.–8:00 p.m. (Pacific)</p></h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer;
