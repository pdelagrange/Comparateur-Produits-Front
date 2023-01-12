import React, { useState } from "react";
import * as categorie from "../Services/Category.Service";
import Error from "./Error";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as prodService from "./../Services/Category.Service";
import { useEffect } from 'react';



const CategoryModificationForm = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const { id } = useParams();

  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    prodService.getCategory(id).then((response) => response.json())
            .then((res) => {
                setName(res.name);
            });
  }, []);

  const reload = async () => {
    await delay(500);
    navigate('/category');
  }

  const createCategorie = () => {
    categorie.modifyCategory(id, name);
    reload()
  };

  return (
    <div className="pt-5 d-flex justify-content-center flex-column align-items-center">
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
            className="bg-info mt-1 text-primary border-0 rounded inputHeight w-100 "
            name="categorieName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </span>
        <button className="mt-2 btn btn-primary" type="submit" onClick={createCategorie}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default CategoryModificationForm;
