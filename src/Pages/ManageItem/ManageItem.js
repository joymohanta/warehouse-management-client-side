import React from "react";
import { Link } from "react-router-dom";
import useItemDetail from "../../Hooks/useItemDetail";
import ManageItemDetail from "./ManageItemDetail/ManageItemDetail";

const ManageItem = () => {
  const [items] = useItemDetail();
  return (
    <div className="text-center my-4">
      <h2 className="title mb-5">MANAGE YOUR ALL ITEM HERE</h2>
      {items.map((item) => (
        <ManageItemDetail key={item._id} item={item}></ManageItemDetail>
      ))}

      <div className="manage_button">
        <Link className="navigate_button" to="/additem">
          Add New Item
        </Link>
      </div>
    </div>
  );
};

export default ManageItem;
