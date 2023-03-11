import { useState, useEffect } from "react";
import { products } from "../../productsMock.js";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (element) => element.category === id
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(id ? productosFiltrados : products);
    });
    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(items);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
