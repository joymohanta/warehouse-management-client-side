import React from "react";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  const { _id, img, name, supplier, description, price, quantity } = props.item;
  const navigate = useNavigate();
  const navigateToInventory = (_id) => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div className="per-item">
      <img src={img} alt="" />
      <h5>
        {name} - {supplier}
      </h5>
      <p className="text-align-justify"> {description} </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="ml-2">
          <h6 id="id-price">Price: {price} </h6>
          <h6>Quantity: {quantity} </h6>
        </div>
        <button
          onClick={() => navigateToInventory(_id)}
          className="inventory-btn"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
