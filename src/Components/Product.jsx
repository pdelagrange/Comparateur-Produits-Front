import React from "react";
import { Card, Buttons } from "react-bootstrap";

const Product = (props) => {

    return (
        <Card className="m-3 p-3 text-center bg-white text-primary border-0 mb-5">
            <Card.Body className="justify-content-center" style={{display: "flex"}}>
                <div>
                    <Card.Title className="product-title fs-1 position-absolute top-0 start-0 p-5 fw-bold mb-1">{props.name}</Card.Title>
                    <Card.Img src={props.img} className="img-fluid p-1"></Card.Img>
                    <Card className= "bg-primary fs-3 text-center text-black shadow-lg rounded p-1 mb-3 fw-bold start-50 w-50">{ props.price } €</Card>
                    <Card.Link href="https://google.com" className="position-absolute top-0 end-0 text-secondary">+ Ajouter un objet à comparer</Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Product;