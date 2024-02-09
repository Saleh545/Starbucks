import React from "react";
import "./Header.css"
const Header = () => {
  return (
    <div>
    <div className="parent">
      <div className="container">
      <div className="header">
        <div className="left">
          <div className="img">
            <img
              src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/446px-Starbucks_Corporation_Logo_2011.svg.png?20170312192423"
              alt=""
            />
          </div>
          <ul>
            <li>menu</li>
            <li>rewards</li>
            <li>gift cards</li>
          </ul>
        </div>
        <div className="right">
            <button className="loc"> <span><img src="./images/pin.png" alt="" /></span>Find a store</button> 
            <button className="sign">Sign in</button>
             <button className="join">Join now</button>
         
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
