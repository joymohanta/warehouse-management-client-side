import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://secure-beyond-10802.herokuapp.com/item`;
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
        toast("Congrates!! New item added");
      });
  };
  return (
    <div className="text-center my-4">
      <h2 className="title">ADD YOUR NEW ITEM HERE</h2>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field w-50"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Item Name"
        />
        <br />
        <input
          className="input-field w-50"
          {...register("supplier")}
          placeholder="Supplier Email"
          required
        />
        <br />
        <textarea
          className="input-field w-50"
          {...register("description")}
          placeholder="Description"
        />
        <br />
        <input
          className="input-field w-50"
          type="number"
          {...register("price")}
          placeholder="Price"
        />
        <br />
        <input
          className="input-field w-50"
          type="number"
          {...register("quantity")}
          placeholder="Quantity Number"
          required
        />
        <br />
        <input
          className="input-field w-50"
          type="text"
          {...register("img")}
          placeholder="Photo URL"
        />
        <br />
        <input className="mt-4 btn-lg btn-success" type="submit" />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItem;
