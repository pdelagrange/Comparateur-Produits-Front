import React from 'react';
import ProductForm from "../Components/ProductForm";
import Header from '../Components/Header';
import {useAdminRescriction} from "../Utils/AdminPageRestriction";
const ProductCreation = () => {

    useAdminRescriction();

    return (
        <div id='vue' className='bg-secondary'> 
            <Header />
            <ProductForm/> 
        </div> 
    );
}

export default ProductCreation;