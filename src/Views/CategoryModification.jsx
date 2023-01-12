import React from 'react';
import Header from '../Components/Header';
import CategoryModificationForm from '../Components/CategoryModificationForm'
import {useAdminRestriction} from "../Utils/AdminPageRestriction";


function CategoryModification() {
    useAdminRestriction();
  return (
    <div id='vue' className="bg-secondary">
      <Header />
      <CategoryModificationForm/>
    </div>
  );
}

export default CategoryModification;