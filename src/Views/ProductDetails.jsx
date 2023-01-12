import Product from "./../Components/Product";
import Details from "./../Components/Details";
import Header from "./../Components/Header";
import React, { useState, useEffect } from "react";
import Select from 'react-select';
import { useParams } from "react-router-dom";
import * as prodService from "./../Services/Product.Service";
import * as category from "./../Services/Product.Service";

const ProductDetails = () => {
    
    const [product, setProduct] = useState();
    const [productsToCompare, setProductsToCompare] = useState([]);  
    const {id} = useParams();
    const [comparator, setComparator] = useState();
    const [options, setOptions] = useState([""]);
    const tab = [];


    
    // Récupération information produit
    useEffect(() => {

        prodService.getProduct(id).then((response) => response.json())
            .then((p) => {
                setProduct(p);
                const getData = async () => {
                    const arr = [];
                    category.getProducts(p.categoryId)
                        .then(response => response.json())
                        .then((res) => {
                            console.log(res);
                            res.map((product) => {
                                return arr.push({ value: product.id, label: product.name});
                            });
                            setOptions(arr);
                        });
                }
                getData();
            })
            .catch(error => console.log(error));
    }, 
    []);

    const handleClick = (e) => {
        setComparator(true);
    }

    const chooseCompare = (e) => {
        setComparator(false);
        console.log(e.value);
        prodService.getProduct(e.value)
        .then(response => response.json())
        .then(data => {
            tab.push(data);
            const proTab = tab;
            proTab.push(data);
            setProductsToCompare(proTab);
            console.log(productsToCompare)

        });
    }

    console.log(productsToCompare);

    return (
        <div id="vue">
            <Header />
            <a onClick={handleClick} className="add-button me-4 text-info">+ Ajouter un produit à comparer</a>
            {
                comparator &&
                <div>
                    <Select placeholder="Select an individual" options={options} onChange={chooseCompare}/>
                </div>
            }
            {
                productsToCompare.map((Aproduct) => {
                    return <Product product={Aproduct} /> 
                })
            }
            {
                product && 
                <Product product={product} />
            }
        </div>
    )
}

export default ProductDetails;