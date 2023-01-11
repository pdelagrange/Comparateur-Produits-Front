import React, { useState } from "react";
import * as User from "../Services/User.Service";
import bcrypt from "bcryptjs-react";
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
      //call api
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const response = await User.createUser(input.username, hashedPassword);
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
        <h1>CardSelector</h1>
      </div>
      <div className="pt-5 d-flex justify-content-center flex-column align-items-center">
        <h2 className="text-primary fs-1">Inscription</h2>
        <form onSubmit={handleClick}
          className="pt-4 d-flex justify-content-center flex-column align-items-center w-50"
        >
          {errorStatus && (
            <Error message="Le mot de passe ou l'identifiant est incorrect" />
          )}
           <span id="elem-wrapper" className="pt-4 w-100 d-flex justify-content-center">
          <input
            type="text"
            name="username"
            placeholder="Identifiant"
            value={input.username}
            onChange={onInputChange}
            onBlur={validateInput}
            className="bg-info mt-1 text-primary border-0 rounded inputHeight w-50 fs-3"
          ></input>
          {error.username && <span className="err">{error.username}</span>} </span>
        
          <span id="elem-wrapper" className="pt-4 w-100 d-flex justify-content-center">

          <input
            type="password"
            name="password"
            placeholder="mot de passe"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            className="bg-info mt-1 text-primary border-0 rounded inputHeight w-50 fs-3"
          ></input>
          {error.password && <span className="err">{error.password}</span>}
          </span>
          <span id="elem-wrapper" className="pt-4 w-100 d-flex justify-content-center">

          <input
            type="password"
            name="confirmPassword"
            placeholder="validez le mot de passe"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
            className="bg-info mt-1 text-primary border-0 rounded inputHeight w-50 fs-3"
          ></input>
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )}</span>

        <div className="pt-5">
            <button className="btn btn-primary fs-3" type="submit">S'inscrire</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
