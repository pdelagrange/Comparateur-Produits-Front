import  React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimpleProduct from "../Components/SimpleProduct";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import * as category from "../Services/Category.Service";
import Banner from "../Components/Banner";
import { useToken } from "../Utils/Token";

const Products = () => {


    const [cat, setCategories] = useState();

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        category.getCategory(id)
        .then((response)=>response.json())
        .then((data) => {
            setCategories(data);
            console.log('cat',cat);
        });
        
    }, [])

    return (
        <div className="bg-secondary" id="vue">
            <Header></Header>
            {cat && <Banner section={cat.name} link="/product/add" buttonText="+ Ajouter un produit"/>}
            <Container>
                <Row className="text-white">
                    {cat && cat.products.map((product) => (
                            <Col key={product.id} md={4}>
                                <SimpleProduct image={product.image} name={product.name} id={product.id}/>
                            </Col>
                        ))}
                    
                </Row>
            </Container>
        </div>
    )
}

export default Products