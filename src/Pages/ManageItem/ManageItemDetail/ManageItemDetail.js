import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import "./ManageItemDetail.css";

const ManageItemDetail = (props) => {
  const { _id, img, name, supplier, description, price, quantity } = props.item;
  return (
    <div>
      <table border="1" cellPadding="14px" className="table_control">
        <tbody>
          <tr>
            <td className="w-25">{name}</td>
            <td className="w-25">{price}</td>
            <td className="w-25">{quantity}</td>
            <td>
              <TrashIcon className="icon-resize"></TrashIcon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageItemDetail;
