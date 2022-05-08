import { useEffect, useState } from "react";

const useItemDetail = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://secure-beyond-10802.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};
export default useItemDetail;
