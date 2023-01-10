import React, { useState } from "react";
import * as categorie from '../Services/Category.Service';

const CategorieForm = ({ onClick }) => {
  const submit = () => {
    onClick();
  };

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const createCategorie = () => {
    let name = document.querySelector("[name='categorieName']").value;
    let caracteristiques = [];
    let inputsCara = document.querySelectorAll("input.caracteristiqueValue");
    inputsCara.forEach(cara => {
        caracteristiques.push({
          name: cara.value
        })
    });
    console.log(caracteristiques);
    categorie.createCategory(name,caracteristiques);
    
  }

  return (
    <div>
      <h2>Création catégorie</h2>
        <label>
          Nom:
          <input name="categorieName" type="text" />
        </label>

        <div className="separator"></div>
        <h2>Caractéristiques</h2>

        <div className="cathegorieInputs">
          {" "}
          {Array.from(Array(counter)).map((c, index) => {
            return (
              <label key={index}>
                Caractéristique {index} :
                <input className="caracteristiqueValue" type="text"></input>
              </label>
            );
          })}
        </div>
        <a className="addThings" onClick={handleClick}>
          + Ajouter une catégorie
        </a>

        <button type="submit" onClick={createCategorie}>
          Valider
        </button>

    </div>
  );
};

export default CategorieForm;
