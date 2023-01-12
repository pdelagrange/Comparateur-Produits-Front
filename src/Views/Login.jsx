import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../Utils/Token";
import { alreadyConnectedRestriction} from "../Utils/AdminPageRestriction";
import Error from "../Components/Error";
import {loginUser} from "../Services/Auth.service";


export default function Login() {
  alreadyConnectedRestriction();
  const [login, setlogin] = useState();
  const [password, setPassword] = useState();

  const [errMessage, setErrMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = useToken();

    loginUser({
      login,
      password
    }).then((resp) => {
        if (resp.status !== 200) {
          return Promise.reject("ERREUR");
        }
        return resp.json();
      })
      .then((data) => {
        if (data) {
          token.setToken(data);
          navigate("/");
        }
      })
      .catch((err) => {
        setErrMessage(err);
      });
  };

  return (
    <div id="vue" className="bg-secondary">
      <div id="logo" className="pt-5 d-flex justify-content-center fs-1 ">
        <h1>CardSelector</h1>
      </div>
      <div className="pt-5 d-flex justify-content-center flex-column align-items-center">
        <h2 className="text-primary fs-1">Connexion</h2>
        <form
          onSubmit={handleSubmit}
          className="pt-4 d-flex justify-content-center flex-column align-items-center w-50"
        >
          {errMessage && (
            <Error message="Le mot de passe ou l'identifiant est incorrect" />
          )}
          <span id="elem-wrapper" className="pt-4 w-100 d-flex justify-content-center">
            <input
              placeholder="Identifiant"
              className="bg-info mt-1 text-primary border-0 rounded inputHeight w-50 fs-4 login-input"
              type="text"
              onChange={(e) => setlogin(e.target.value)}
            />
          </span>
          <span id="elem-wrapper" className="pt-4 w-100 d-flex justify-content-center">
            <input
              placeholder="Mot de passe"
              className="bg-info mt-1 text-primary border-0 rounded inputHeight w-50 fs-4 login-input"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <div className="pt-5">
            <button className="btn btn-primary fs-3 login-input" type="submit">Se connecter</button>
          </div>
          <div className="pt-2 fs-4">
            <a href="/signIn" className="text-primary">S'inscrire</a>
          </div>
        </form>
      </div>
    </div>
  );
}
