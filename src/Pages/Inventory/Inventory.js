import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
    }
  }
  const handleQuantity = (event) => {
    const amountField = document.getElementById("quantity-input");
    const amount = parseInt(amountField.value);
    if (amount > 0) {
      totalQuantity(amount, true);
    }
    const total = amountField.value;
    const number = total;
    amountField.value = "";
    const quantityNumber = { number };
    const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quantityNumber),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Quantity added successfully!!");
      });
  };

  const handleDeliver = () => {
    const quantity = document.getElementById("total-quantity");
    const beforeQuantity = quantity.innerText;
    quantity.innerText = parseInt(beforeQuantity) - 1;
    const number = quantity.innerText;
    const quantityNumber = { number };
    const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quantityNumber),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Quantity added successfully!!");
      });
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
      <button onClick={handleDeliver} className="btn btn-primary mb-3">
        Delivered
      </button>
      <section>
        <h5>Enter your new quantity item here</h5>
        <input
          id="quantity-input"
          type="number"
          name="number"
          placeholder="Quantity number"
          required
        />
        <br />
        <br />
        <button onClick={handleQuantity} className="btn btn-success">
          Add Quantity
        </button>
      </section>
      <div className="manage_button">
        <Link className="navigate_button" to="/manageitem">
          Manage All Items
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
