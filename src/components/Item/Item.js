import React from "react";
import "./Item.scss";
import img from "../../assets/PngItem_1745833.png";

function Item() {
  return (
    <div className="itemcontainer">
      <div className="itemtopimgContainer">
        <div className="containerimg">
          <img src={img} alt="ABC" />
        </div>
      </div>
      <div className="itembottomcontainer"></div>
    </div>
  );
}

export default Item;
