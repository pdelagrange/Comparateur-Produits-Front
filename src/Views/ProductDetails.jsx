import Product from "./../Components/Product";
import Details from "./../Components/Details";
import Header from "./../Components/Header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as prodService from "./../Services/Product.Service";

const ProductDetails = () => {
    
    const [product, setProduct] = useState(); 
    const {id} = useParams();
    
    // Récupération information produit
    useEffect(() => {
        prodService.getProduct(id).then((response) => response.json())
            .then((p) => { setProduct(p[id-1]) }) // Sinon on récupère l'ensemble des produits...
            .catch(error => console.log(error));
    }, []); 
    console.log(product);

    return (
        <div id="vue">
            <Header />
            {
                product && 
                <Product name={product.name} price={product.price} img={product.image} /> 
            }
            {   product && 
                <Details desc={product.description} char={product.characteristics} />
            }
        </div>
    )
}

export default ProductDetails;