import React, { useState } from "react";
import * as categorie from "../Services/Category.Service";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

  const Input = (props) => {
    return  <div key={props.index}>
    <label>Caractéristique {props.index} :</label>
    <input required className="caracteristiqueValue" type="text"></input>
    <select className="caracteristiqueValue" name="type">
      <option value="checkbox">Oui/Non</option>
      <option value="text">Texte</option>
      <option value="number">Nombre</option>
    </select>
  </div>;
  };


const CategorieForm = () => {



  const [inputList, setInputList] = useState([]);
  const [toggle, setToggle] = useState(false)


  const navigate = useNavigate();

  const [counter, setCounter] = useState(0);

  const [name, setName] = useState("");
  

  const handleClick = () => {
    setCounter(counter + 1);
    setInputList(inputList.concat(<Input key={counter} index={counter} />));

  };

  const createCategorie = () => {
    let error = false
    if(!name.length > 0){ error = true;}
    let caracteristiques = [];
    let inputsCara = document.querySelectorAll("input.caracteristiqueValue");
    let selectCara = document.querySelectorAll("select.caracteristiqueValue");
    inputsCara.forEach((cara,index) => {
      console.log(cara.value.length > 0);
      if(!cara.value.length > 0){error = true;}
      caracteristiques.push({
        name: cara.value,
        type: selectCara[index].value
      });

      }
    );
    if(!error){
    categorie.createCategory(name, caracteristiques);
    navigate("/category");
    }else{
      setToggle(true);
    }

  };


  return (
    <div>
      {toggle && (<Error key={counter} message="Un champs ou plusieurs sont vide" />)}
      <form action="">
      <h2>Création catégorie</h2>
      <div className="inputDiv">
        <label>Nom : </label>
        <input required name="categorieName" type="text" onChange={(e) => setName(e.target.value) } ></input>
      </div>
      <div className="separator"></div>
      <h2>Caractéristiques</h2>

      <div className="cathegorieInputs">
      {inputList}
      </div>
      <a className="addThings" onClick={handleClick}>
        + Ajouter une caracteristique{" "}
      </a>

      <button type="submit" onClick={createCategorie}>
        Valider
      </button>
      </form>
    </div>
  );
};

export default CategorieForm;
