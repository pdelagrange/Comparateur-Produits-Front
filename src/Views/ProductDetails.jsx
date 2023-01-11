import Product from "./../Components/Product";
import Details from "./../Components/Details";
import Header from "./../Components/Header";
import React, { useState, useEffect } from 'react';
import * as prodService from "./../Services/Product.Service";

const ProductDetails = () => {
    
    const [data, setData] = useState([]); 

    // Récupération information produit
    useEffect(() => {
        console.log("useEffect() called");
        prodService.getProduct(id).then((response) => response.json()).then((p) => {
            setData(p);
        });
    }, []); 
    console.log(data);

    return (
        <div id="vue">
            <Header />
            <Product name={data.name} prix={data.price} />
            <Details desc={data.description} char={data.characteristics} />
        </div>
    )
}

export default ProductDetails;