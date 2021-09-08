import React from "react";
import "./Item.scss";
import img from "../../assets/PngItem_1745833.png";
import { Link } from "react-router-dom";

function Item() {
  return (
    <div className="itemcontainer">
      <div className="itemtopimgContainer">
        <div className="containerimg">
          <img src={img} alt="ABC" />
        </div>
      </div>
      <div className="itembottomcontainer">
        <p>SEELVELESS SHIRT</p>
        <p>200rs</p>
        <Link className="buton">Purchase</Link>
      </div>
    </div>
  );
}

export default Item;
