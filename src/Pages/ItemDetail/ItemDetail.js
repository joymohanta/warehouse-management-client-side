import React from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  const { img, name, supplier, description, price, quantity } = props.item;
  return (
    <div className="per-item">
      <img src={img} alt="" />
      <h4> {name} </h4>
      <p> {description} </p>
      <h5> {supplier} </h5>
      <h5>Price: {price} </h5>
      <h5>Quantity: {quantity} </h5>
      <Link className="inventory-btn" to={"/inventory"}>
        <span>Update</span>
      </Link>
    </div>
  );
};

export default ItemDetail;
