import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  function getCurrentQuantity() {
    const quantity = document.getElementById("total-quantity");
    const beforeQuantity = parseInt(quantity.innerText);
    return beforeQuantity;
  }
  function totalQuantity(amount, isAdd) {
    const quantity = document.getElementById("total-quantity");
    const beforeQuantity = getCurrentQuantity();
    if (isAdd === true) {
      quantity.innerText = beforeQuantity + amount;
    } else {
      quantity.innerText = beforeQuantity - amount;
    }
  }
  const handleQuantity = () => {
    const amountField = document.getElementById("quantity-input");
    const amount = parseInt(amountField.value);
    amountField.value = "";
    if (amount > 0) {
      totalQuantity(amount, true);
    }
  };

  const handleDeliver = () => {
    const quantity = document.getElementById("total-quantity");
    const beforeQuantity = quantity.innerText;
    quantity.innerText = parseInt(beforeQuantity) - 1;
  };

  return (
    <div className="selected_item_detail">
      <h2>Your selected Item detail id is: {item._id} </h2>
      <img src={item.img} alt="" />
      <h3>Product name is : {item.name}</h3>
      <h4>Product supplier : {item.supplier}</h4>
      <h4>Price : {item.price}</h4>
      <h4>
        Total quantity : <span id="total-quantity"> {item.quantity} </span>
      </h4>
      <p> {item.description} </p>
      <button
        id="deliver-button"
        onClick={handleDeliver}
        className="btn btn-primary mb-3"
      >
        Deliver One Item
      </button>
      <div>
        <h5>Enter your new quantity item here</h5>
        <input
          id="quantity-input"
          type="text"
          placeholder="Quantity number"
          required
        />
        <br />
        <br />
        <button
          id="quantity-button"
          onClick={handleQuantity}
          className="btn btn-success"
        >
          Add Quantity
        </button>
      </div>
    </div>
  );
};

export default Inventory;
