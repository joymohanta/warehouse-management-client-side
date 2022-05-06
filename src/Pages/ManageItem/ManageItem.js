import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import "./ManageItem.css";
import { Link } from "react-router-dom";
import useItemDetail from "../../Hooks/useItemDetail";

const ManageItem = () => {
  const [items, setItems] = useItemDetail();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restItem = items.filter((item) => item._id !== id);
          setItems(restItem);
        });
    }
  };

  return (
    <div className="text-center my-4">
      <h2 className="title mb-5">MANAGE YOUR ALL ITEM HERE</h2>
      {items.map((item) => (
        <div key={item._id}>
          <h5>
            <table border="1" cellPadding="14px" className="table_control">
              <tbody>
                <tr>
                  <td className="w-25"> {item.name} </td>
                  <td className="w-25"> {item.price} </td>
                  <td className="w-25"> {item.quantity} </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="delete_btn"
                    >
                      {<TrashIcon className="icon-resize"></TrashIcon>}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </h5>
        </div>
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
