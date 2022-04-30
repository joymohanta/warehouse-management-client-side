import { useEffect, useState } from "react";

const useItemDetail = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};
export default useItemDetail;
