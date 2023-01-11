import React from "react";
import { Card, Buttons } from "react-bootstrap";

const Product = (props) => {

    return (
        <Card className="m-3 p-3 text-center bg-white text-primary border-0 mb-5">
            <Card.Body className="justify-content-center" style={{display: "flex"}}>
                <div>
                    <Card.Title className="product-title fs-1 position-absolute top-0 start-0 p-5 fw-bold">{props.name}</Card.Title>
                    <Card.Img src={props.img} className="img-fluid p-1 me-3"></Card.Img>
                    <Card className= "ms-5 fs-4 text-center text-black shadow-lg p-3 mb-5 bg-primary rounded position-absolute top-50 start-50">{ props.price } €</Card>
                    <Card.Link href="https://google.com" className="position-absolute top-10 end-0">+ Ajouter un objet à comparer</Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Product;