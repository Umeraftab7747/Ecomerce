// rfce
import React from "react";
import "./Home.scss";
import img from "../../assets/lucrezia-carnelos-wQ9VuP_Njr4-unsplash.jpg";

function Home() {
  return (
    <div className="MainContainer">
      <div className="BgImage">
        <div className="screenoverlay">
          <div className="txtcontainer">
            <p className="HeaderText">Welcome to Ecom-Shop</p>
            <p className="SloganText">"We’re in Business to Improve Lives"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
