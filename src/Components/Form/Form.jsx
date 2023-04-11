import { useState } from "react";
const Form = () => {
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const handleChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const handleChangeMail = (e) => {
  //   setMail(e.target.value);
  // };

  // const handleChangeName = (e) => {
  //   setUserData({ ...userData, name: e.target.value });
  // };

  // const handleChangeMail = (e) => {
  //   setUserData({ ...userData, mail: e.target.value });
  // };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  // console.log(userData.password.trim);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (userData.name.length < 5) {
      console.log("Se requiere un minimo de 8 caracteres en el nombre");
      setError(true);
      setErrorMessage("el nombre no puede ser menor a 8 caracteres");
      return;
    }

    const incluye = userData.email.includes("@");
    if (!incluye) {
      console.log("email no valido");
      setError(true);
      setErrorMessage("email no valido");
      return;
    }

    const str = userData.password.trim();
    const passwordIsvalid = userData.password === str;

    if (!passwordIsvalid || userData.password.length < 5) {
      console.log(
        "La contraseña no debe tener espacios en blanco y debe tener como mínimo 5 caracteres"
      );
      setError(true);
      setErrorMessage(
        "La contraseña no debe tener espacios en blanco y debe tener como mínimo 5 caracteres"
      );
      return;
    }
    console.log(userData);
  };
  // const handleChangePassword = (e) => {
  //   setUserData({ ...userData, password: e.target.value });
  // };

  // console.log(name);
  // console.log(mail);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su mail"
          name="email"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Ingrese su password"
          name="password"
          onClick={handleChange}
        />
        <button type="submit"> Enviar </button>
      </form>
      {error ? <h1>{errorMessage}</h1> : null}
    </div>
  );
};

export default Form;
