import React from "react";
import Header from "../components/Header/Header";
import   "../styles/find.css"
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { GrShare } from "react-icons/gr";



const Find = () => {
  return (
    <div>
      <Header />
      <div className="find">
        <div className="find-left">
          <div className="find-flex">

            <div className="input-flex flex-none">
                <form action="">
                    <input type="search" placeholder="Find a store"/>
                    <div className="button-find">
                    <i><TfiSearch /></i>
                    </div>
                </form>
                <Link>Filter</Link>
            </div>  
          </div>
            <div className="find-text">
                <h2>Zoomed out too far</h2>
                <p>Try searching for a location or zooming in to see results.</p>
            </div>
            <div className="find-bottom">
                <Link>Privacy Notice <i><GrShare /></i></Link>
                <Link>Terms of Use <i><GrShare /></i></Link>
                <Link>Do Not Share My Personal Information <i><GrShare /></i></Link>
            </div>
            </div>
            <div className="find-right">
            <div className="input-flex flex-block">
                <form action="">
                    <input type="search" placeholder="Find a store"/>
                    <div className="button-find">
                    <i><TfiSearch /></i>
                    </div>
                </form>
                <Link>Filter</Link>
            </div>
            <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39960.81298749272!2d50.191338696449954!3d40.47706775679081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2saz!4v1711576358723!5m2!1str!2saz"
        style={{ width: '100%', height: '100%', border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
              </div>
        </div>
    </div>
  );
};

export default Find;
