import React from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Your selected Item detail id is: {id} </h2>
    </div>
  );
};

export default Inventory;
