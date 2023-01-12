import React from "react";
import { Card, Buttons } from "react-bootstrap";
import {BufferToUri} from "../Utils/Utils";

const Product = (props) => {

    const product = props.product;

    let img;
    if(!product.image){
        img = '/icons/no-photo.png';
    } else {
        img = BufferToUri(product.image.data);
    }

    return (
        <Card className="m-3 p-3 text-center bg-white text-primary border-0 mb-5">
            <Card.Body className="justify-content-center mb-0" style={{display: "flex"}}>
                <div>
                    <Card.Title className="product-title fs-1 position-absolute top-0 start-0 p-5 fw-bold">{props.name}</Card.Title>
                    <Card.Img src={img} className="img-fluid p-1 mt-5"></Card.Img>
                    <Card className= "bg-primary fs-3 text-center text-black shadow-lg p-1 m-0 fw-bold start-100 bottom-25 w-25 border-secondary">{props.price} €</Card>
                    <Card.Link href="https://google.com" className="position-absolute top-0 end-0 text-secondary">+ Ajouter un objet à comparer</Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Product;