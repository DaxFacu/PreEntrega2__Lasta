import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const CartWidget = () => {
  let numero = 0;
  return (
    <div className="container-cart">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Link to="/cart">
          <ShoppingCartIcon />
          <div className="bubble-counter">
            <span>{numero}</span>
          </div>
        </Link>
      </Box>
    </div>
  );
};

export default CartWidget;
