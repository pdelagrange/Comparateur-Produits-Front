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
            .then((p) => { 
                setProduct(p);})
            .catch(error => console.log(error));
    }, []);

    return (
        <div id="vue">
            <Header />
            {
                product && 
                <Product product={product} />
            }
            {   product && 
                <Details desc={product.description} char={product.characteristic_types} />
            }
        </div>
    )
}

export default ProductDetails;
