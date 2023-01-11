import React from 'react';
import Header from '../Components/Header';
import CategorieForm from '../Components/CategorieForm'
import {useAdminRescriction} from "../Utils/AdminPageRestriction";


function CategorieCreation() {
    useAdminRescriction();
  return (
    <div id='vue'>
      <Header />
      <CategorieForm />
    </div>
  );
}

export default CategorieCreation;