import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/item`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="text-center my-4">
      <h2>This is Add item page</h2>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Item Name"
        />
        <br />
        <input
          className="input-field"
          {...register("supplier")}
          placeholder="Supplier Email"
        />
        <br />
        <textarea
          className="input-field"
          {...register("description")}
          placeholder="Description"
        />
        <br />
        <input
          className="input-field"
          type="number"
          {...register("price")}
          placeholder="Price"
        />
        <br />
        <input
          className="input-field"
          type="number"
          {...register("quantity")}
          placeholder="Quantity Number"
        />
        <br />
        <input
          className="input-field"
          type="text"
          {...register("img")}
          placeholder="Photo URL"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
