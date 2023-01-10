import React, { useState } from "react";
import PropTypes from "prop-types";

const CategorieForm = ({ onClick }) => {
  const submit = () => {
    onClick();
  };

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div>

      <h2>Création catégorie</h2>
      <label>
        Nom:
        <input type="text" />
      </label>

      <div className="separator"></div>
      <h2>Catégories</h2>
      {Array.from(Array(counter)).map((c, index) => {
        return <label>Catégorie {index} : <input key={c} type="text"></input></label>;
      })}
      <div className="cathegorieInput"></div>
      <button className="addThings" onClick={handleClick}>+ Ajouter une catégorie</button>

      <button onClick={submit}>Valider</button>
    </div>
  );
};

export default CategorieForm;
