import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  const { img, name, supplier, description, price, quantity } = props.item;
  return (
    <div className="per-item">
      <img src={img} alt="" />
      <h5>
        {name} - {supplier}
      </h5>
      <p className="text-align-justify"> {description} </p>
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <h6 id="id-price">Price: {price} </h6>
          <h6>Quantity: {quantity} </h6>
        </div>
        <Link className="inventory-btn" to={"/inventory"}>
          <span>Update</span>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
