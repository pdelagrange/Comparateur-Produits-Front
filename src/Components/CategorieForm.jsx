import React, { useState } from "react";
import * as categorie from "../Services/Category.Service";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const Input = (props) => {
  return (
    <div className="d-flex align-items-center" key={props.index}>
      <label className="text-primary h4">{props.index +1} : </label>
      <div className="w-75">
      <input required className="caracteristiqueValue bg-info mt-1 text-primary border-0 rounded inputHeight w-70 fs-3" type="text"></input>
      <select className="caracteristiqueValue bg-info mt-1 text-primary border-0 rounded inputHeight w-70 fs-4" name="type">
        <option value="checkbox">Oui/Non</option>
        <option value="text">Texte</option>
        <option value="number">Nombre</option>
      </select></div>
    </div>
  );
};

const CategorieForm = () => {
  const [inputList, setInputList] = useState([]);
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const [counter, setCounter] = useState(0);

  const [name, setName] = useState("");

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleClick = () => {
    setCounter(counter + 1);
    setInputList(inputList.concat(<Input key={counter} index={counter} />));
  };

  const reload = async () => {
    await delay(500);
    navigate('/category');
}

  const createCategorie = () => {
    let error = false;
    if (!name.length > 0) {
      error = true;
    }
    let caracteristiques = [];
    let inputsCara = document.querySelectorAll("input.caracteristiqueValue");
    let selectCara = document.querySelectorAll("select.caracteristiqueValue");
    inputsCara.forEach((cara, index) => {
      if (!cara.value.length > 0) {
        error = true;
      }
      caracteristiques.push({
        name: cara.value,
        type: selectCara[index].value,
      });
    });
    if (!error) {
      categorie.createCategory(name, caracteristiques);
      reload();
    } else {
      reload();
    }
  };

  return (
    <div className="pt-5 d-flex justify-content-center flex-column align-items-center">
      {toggle && (
        <Error key={counter} message="Un champs ou plusieurs sont vide" />
      )}
      <div
        className="pt-4 d-flex justify-content-center flex-column align-items-center w-50"
      >
        <h2 className="text-primary fs-1">Création catégorie</h2>
        <span
          id="elem-wrapper"
          className="pt-4 w-100 d-flex flex-column justify-content-center"
        >
          <label className="text-white h2">Nom : </label>
          <input
            required
            className="bg-info mt-1 text-primary border-0 rounded inputHeight w-100 fs-3"
            name="categorieName"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </span>
        <div className="separator mt-4"></div>
        <h2 className="pt-4 text-primary fs-1">Caractéristiques</h2>

        <div className="cathegorieInputs">{inputList}</div>
        <a className="addThings pt-2 fs-4 text-primary" onClick={handleClick}>
          + Ajouter une caracteristique{" "}
        </a>

        <button className="btn btn-primary" type="submit" onClick={createCategorie}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default CategorieForm;
