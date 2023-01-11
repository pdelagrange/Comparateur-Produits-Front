import React, { useState } from "react";
import * as categorie from '../Services/Category.Service';
import { useNavigate } from "react-router-dom";

const CategorieForm = ({ onClick }) => {
  const submit = () => {
    onClick();
  };

  const navigate = useNavigate();

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
    categorie.createCategory(name,caracteristiques);
    navigate('/category')

    
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
          + Ajouter une caracteristique
        </a>

        <button type="submit" onClick={createCategorie}>
          Valider
        </button>

    </div>
  );
};

export default CategorieForm;
