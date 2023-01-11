import React, { useState } from "react";
import * as categorie from "../Services/Category.Service";
import { useNavigate } from "react-router-dom";


const CategorieForm = ({ onClick }) => {
  const submit = () => {
    onClick();
  };

  const navigate = useNavigate();

  const [counter, setCounter] = useState(0);

  const [name, setName] = useState("");
  

  const handleClick = () => {
    setCounter(counter + 1);
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
      alert("Un champs n'est pas remplie")
    }
  
  };


  return (
    <div>
      <form action="">
      <h2>Création catégorie</h2>
      <div>
        <label>Nom : </label>
        <input required name="categorieName" type="text" onChange={(e) => setName(e.target.value)} ></input>
      </div>
      <div className="separator"></div>
      <h2>Caractéristiques</h2>

      <div className="cathegorieInputs">
        {" "}
        {Array.from(Array(counter)).map((c, index) => {
          return (
            <div key={index}>
              <label>Caractéristique {index} :</label>
              <input className="caracteristiqueValue" type="text"></input>
              <select className="caracteristiqueValue" name="type">
                <option value="checkbox">Oui/Non</option>
                <option value="text">Texte</option>
                <option value="number">Nombre</option>
              </select>
            </div>
          );
        })}
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
