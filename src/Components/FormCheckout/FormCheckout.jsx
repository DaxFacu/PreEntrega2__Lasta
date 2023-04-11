import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total: getTotalPrice(),
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));
    cart.map((products) => {
      let refdoc = doc(db, "products", products.id);
      updateDoc(refdoc, { stock: products.stock - products.quantity });
      return products;
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="textxt"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="textxt"
          placeholder="Mail"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="textxt"
          placeholder="Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckout;
