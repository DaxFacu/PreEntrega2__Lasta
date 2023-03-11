import CartWidget from "../CartWidget/CartWidget.js";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let numero = 12;
  return (
    <div className={styles.containerNavbar}>
      <Link to="/">
        <img
          className={styles.iconPropiedades}
          src="./todo3D.png"
          alt="Logo de Todo3D"
        ></img>
      </Link>
      {
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
          <ButtonGroup
            className={styles.containerList}
            variant="text"
            aria-label="text button group"
            color="inherit"
            size="large"
          >
            <Link to="/">
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
                variant="text"
              >
                Todo
              </Button>
            </Link>
            <Link to="/category/impresorasfdm">
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
                variant="text"
              >
                Impresoras FDM
              </Button>
            </Link>
            <Link to="/category/impresorasresina">
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
                variant="text"
              >
                Impresoras resina
              </Button>
            </Link>
            <Link to="/category/insumos">
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
                variant="text"
              >
                Insumos
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
      }

      <CartWidget numero={numero} />
    </div>
  );
};

export default Navbar;
