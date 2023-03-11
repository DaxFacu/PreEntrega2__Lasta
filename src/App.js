import Navbar from "./Components/Navbar/Navbar.js";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="*" element={<h1> error 404: Página no encontrada </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
