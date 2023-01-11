import React from 'react';
import Header from '../Components/Header';
import CategorieForm from '../Components/CategorieForm'
import {useAdminRestriction} from "../Utils/AdminPageRestriction";


function CategorieCreation() {
    useAdminRestriction();
  return (
    <div id='vue'>
      <Header />
      <CategorieForm />
    </div>
  );
}

export default CategorieCreation;