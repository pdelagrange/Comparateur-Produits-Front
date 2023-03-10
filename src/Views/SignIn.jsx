import React, { useState } from "react";
import * as User from "../Services/User.Service";
import { useNavigate } from "react-router-dom";
import Error from "../Components/Error"

const SignInForm = () => {
  const navigate = useNavigate();

  const [errorStatus, setErrorStatus] = useState();

  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Veuillez entrer un login";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Veuillez entrer un mot de passe";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Les mots de passe ne correspondent pas";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Veuillez entrer un mot de passe de confirmation";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Les mots de passe ne correspondent pas";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleClick = async () => {
    if (
      error.username === "" &&
      error.confirmPassword === "" &&
      error.password === ""
    ) {
      const response = await User.createUser(input.username, input.password);
      if (response.status === 200) {
        navigate("/login");
      } else {
        setErrorStatus(response.status);
      }
    }
  };

  return (
    <div id="vue" className="bg-secondary">
      <div id="logo" className="pt-5 d-flex justify-content-center fs-1 ">
      <a href="/"><h1>CardSelector</h1></a>
      </div>
      <div className="pt-5 d-flex justify-content-center flex-column align-items-center">
        <h2 className="text-primary fs-1">Inscription</h2>
        <div className="pt-4 d-flex justify-content-center flex-column align-items-center w-50"
        >
          {errorStatus && <Error message={"Erreur lors de la cr??ation de l'utilisateur"}/>}
          {error.username && (
            <Error message={error.username} />
          )}  
          {error.password &&  <Error message={error.password}/>}

          {error.confirmPassword && (
            <Error message={error.confirmPassword}/>
          )}

           <span id="elem-wrapper" className="pt-4 w-100 d-flex justify-content-center">
          <input required
            type="text"
            name="username"
            placeholder="Identifiant"
            value={input.username}
            onChange={onInputChange}
            onBlur={validateInput}
            className="bg-info mt-1 text-primary border-0 rounded inputHeight w-50 fs-3"
          ></input>
          </span>
        
          <span id="elem-wrapper" className="pt-4 w-100 d-flex justify-content-center">

          <input required
            type="password"
            name="password"
            placeholder="mot de passe"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            className="bg-info mt-1 text-primary border-0 rounded inputHeight w-50 fs-3"
          ></input>
          
          </span>
          <span id="elem-wrapper" className="pt-4 w-100 d-flex justify-content-center">

          <input required
            type="password"
            name="confirmPassword"
            placeholder="validez le mot de passe"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
            className="bg-info mt-1 text-primary border-0 rounded inputHeight w-50 fs-3"
          ></input>
          </span>

        <div className="pt-5">
            <button onClick={handleClick} className="btn btn-primary fs-3" type="submit">S'inscrire</button>
        </div>
        <div className="pt-5">
            <a href="/login" className="add-button me-4">{"< Retour"}</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
