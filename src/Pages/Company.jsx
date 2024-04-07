import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/company.css";
const Company = () => {
  return (
    <div>
      <Header />
      <div className="company">
        <div className="company-img-text">
          <h2>
            <strong>Our Company</strong>
          </h2>
          <div className="comp-img">
            <img
              src="	https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72908.jpg"
              alt=""/>
          </div>
          <div className="comp-img-text">
            <h1>Our Heritage</h1>

            <p>
              Our story begins in 1971 along the cobblestone streets of
              Seattle’s historic Pike Place Market. It was here where Starbucks
              opened its first store, offering fresh-roasted coffee beans, tea
              and spices from around the world for our customers to take home.
              Our name was inspired by the classic tale, “Moby-Dick,” evoking
              the seafaring tradition of the early coffee traders.
            </p>
            <p>
              Ten years later, a young New Yorker named Howard Schultz would
              walk through these doors and become captivated with Starbucks
              coffee from his first sip. After joining the company in 1982, a
              different cobblestone road would lead him to another discovery. It
              was on a trip to Milan in 1983 that Howard first experienced
              Italy’s coffeehouses, and he returned to Seattle inspired to bring
              the warmth and artistry of its coffee culture to Starbucks. By
              1987, we swapped our brown aprons for green ones and embarked on
              our next chapter as a coffeehouse.
            </p>
            <p>
              Starbucks would soon expand to Chicago and Vancouver, Canada and
              then on to California, Washington, D.C. and New York. By 1996, we
              would cross the Pacific to open our first store in Japan, followed
              by Europe in 1998 and China in 1999. Over the next two decades, we
              would grow to welcome millions of customers each week and become a
              part of the fabric of tens of thousands of neighborhoods all
              around the world. In everything we do, we are always dedicated to
              Our Mission: With every cup, with every conversation, with every
              community - we nurture the limitless possibilities of human
              connection.
            </p>
          </div>
          <div className="comp-img">
            <img
              src="	https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72909.jpg"
              alt=""/>
          </div>
          <d iv className="comp-img-text">
            <h3>Coffee & Craft</h3>
            <p>
              It takes many hands to craft the perfect cup of coffee – from the
              farmers who tend to the red-ripe coffee cherries, to the master
              roasters who coax the best from every bean, and to the barista who
              serves it with care. We are committed to the highest standards of
              quality and service, embracing our heritage while innovating to
              create new experiences to savor.
            </p>
            <button>Learn more</button>
          </d>
          <div className="comp-img">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72910.jpg"
              alt=""/>
          </div>
          <div className="comp-img-text">
            <h3>
              <strong>Our Partners</strong>
            </h3>
            <p>
              We like to say that we are not in the coffee business serving
              people, but in the people business serving coffee. Our employees –
              who we call partners – are at the heart of the Starbucks
              experience. We are committed to making our partners proud and
              investing in their health, well-being and success and to creating
              a culture of belonging where everyone is welcome.
            </p>
            <button>Explore Careers</button>
          </div>
          <div className="comp-img">
            <img
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72911.jpg"
              alt=""/>
          </div>
          <div className="comp-img-text">
            <h3>
              <strong>We Believe in the Pursuit of Doing Good</strong>
            </h3>
            <p>
              As it has been from the beginning, our purpose goes far beyond
              profit. We believe Starbucks can, and should, have a positive
              impact on the communities we serve.
            </p>
          </div>
          <div className="comp-img-text2">
            <h3>
              <strong>People</strong>
            </h3>
            <p>
              Our aspiration is to be people positive – investing in humanity
              and the well-being of everyone we connect with, from our partners
              to coffee farmers to the customers in our stores and beyond.
            </p>
            <button>Learn more</button>
          </div>
          <div className="comp-img-text2">
            <h3>
              <strong>Planet</strong>
            </h3>
            <p>
              We are striving to become resource positive – giving back more
              than we take from the planet. We are working to store more carbon
              than we emit, replenish more freshwater than we use, and eliminate
              waste. We know we can’t do it alone. It takes all of us.
            </p>{" "}
            <button>Learn more</button>
          </div>
          <div className="comp-img-text">
            <h3>
              <strong>Learn More About Us</strong>
            </h3>
            <h5>Stories & News</h5>
            <p>
              Behind every cup of coffee is a story. Enjoy some of our favorites
              along with all the latest news from the storytellers at Starbucks
              Stories.
            </p>
            <button className="m-none">Check out Starbucks Stories</button>
            <h5>Company Profile</h5>
            <p>Here’s a closer look at our company.</p>
            <button className="m-none">Learn more</button>
            <h5>Company Timeline</h5>
            <p>
              Read a brief history of Starbucks, from 1971 through today.
            </p>{" "}
            <button className="m-none">Learn more</button>
            <h5>Ethics & Compliance</h5>
            <button className="m-none">Learn more</button>
            <h5>Corporate Governance</h5>
            <button >Learn more</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;
