import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));
  console.log(productSelected);

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad}`);
  };

  return (
    <div>
      <div className={styles.divBox}>
        <img
          className={styles.itemBox}
          src={productSelected.img}
          alt={productSelected.alt}
        />
        <div className={styles.riBox}>
          <h2 className={styles.textBox}>{productSelected.title}</h2>
          <div>
            <p>{productSelected.description}</p>
          </div>
          <div>
            <p>Stock : {productSelected.stock}</p>
          </div>
          <div>
            <ItemCount stock={productSelected.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
