import Product from "./../Components/Product";
import Details from "./../Components/Details";
import Header from "./../Components/Header";
import React, { useState, useEffect } from "react";
import Select from 'react-select';
import { useParams } from "react-router-dom";
import * as prodService from "./../Services/Product.Service";
import * as category from "./../Services/Product.Service";

import { Tabs, Tab } from 'react-bootstrap';


const ProductDetails = () => {

    const [product, setProduct] = useState();
    const [productsToCompare, setProductsToCompare] = useState([]);
    const { id } = useParams();
    const [comparator, setComparator] = useState();
    const [options, setOptions] = useState([""]);



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
                                return arr.push({ value: product.id, label: product.name });
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
        prodService.getProduct(e.value)
            .then(response => response.json())
            .then(data => {

                let inside = false;
                productsToCompare.forEach(prod =>{
                    if(data.id == prod.id){
                        inside = true;
                    }
                })

                if(inside){
                    console.log("already in comparator")
                }
                else{
                    setProductsToCompare(productsToCompare.concat(data));
                }
                
            });
    }

    console.log("final", productsToCompare);

    return (
        <div id="vue">
            <Header />
            <a onClick={handleClick} className="add-button me-4 text-info">+ Ajouter un produit à comparer</a>
            {
                comparator &&
                <div>
                    <Select placeholder="Select an individual" options={options} onChange={chooseCompare} />
                </div>
            }
            {
                product &&
                <Tabs defaultActiveKey={"#" +product.id}>
                    <Tab eventKey={product.id} title={product.name}>
                        <Product product={product} />
                    </Tab>
                        
                    {
                        productsToCompare.map((Aproduct) => {
                            return (
                                <Tab eventKey={Aproduct.id} title={Aproduct.name}>
                                    <Product product={Aproduct} />
                                </Tab>
                            )
                        })
                    }

                </Tabs >
            }
        </div>
    )
}

export default ProductDetails;