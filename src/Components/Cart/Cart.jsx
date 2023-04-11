import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { findByLabelText } from "@testing-library/react";
import { InsertPageBreak } from "@mui/icons-material";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "Seguro que deseas eliminar todo el carrito?",
      showCancelButton: true,
      confirmButtonText: "OK",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado", "", "success");
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>Gracias por su compra</h2>
        <h4>El comprobante es : {orderId}</h4>
        <Link to="/">Seguir comprando</Link>
      </div>
    );
  }
  const precioTotal = getTotalPrice();
  console.log(getTotalPrice);
  return (
    <div>
      {!showForm ? (
        <div
          syle={{
            width: "20%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {cart.map((elemento) => {
            return (
              <div
                key={elemento.id}
                style={{ width: "20%", border: "2px solid black" }}
              >
                <h2>{elemento.title}</h2>
                <img src={elemento.img} alt="" style={{ width: "2" }} />
                <h3>{elemento.quantity}</h3>
                <h3>{elemento.precio}</h3>
                <button
                  color="secondaty"
                  variant="contained"
                  onClick={() => deleteProductById(elemento.id)}
                >
                  Eliminar
                </button>
                <button
                  color="secondaty"
                  variant="contained"
                  onClick={() => setShowForm(true)}
                >
                  Finalizar compra
                </button>
              </div>
            );
          })}
          {cart.length > 0 && (
            <div>
              <button onClick={() => clear()}> Limpiar carrito</button>
            </div>
          )}
          <h1>El total del carrito es {precioTotal}</h1>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
