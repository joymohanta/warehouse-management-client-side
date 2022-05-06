import React from "react";
import "./MyItems.css";
import useItemDetail from "../../Hooks/useItemDetail";

const MyItems = () => {
  const [items, setItems] = useItemDetail();
  return (
    <div className="text-center my-4">
      <h2 className="mb-5">YOU CAN SEE HERE ONLY YOUR ADDED ITEM</h2>
      <div className="myItem_style">
        {items.slice(5).map((item) => (
          <div key={item._id}>
            <img src={item.img} alt="" />
            <h5>Name: {item.name}</h5>
            <h5>Email: {item.supplier} </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
