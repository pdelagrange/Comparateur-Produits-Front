import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const SimpleProduct = (props) => {

    console.log(props.name);

    return (
        <Link to={"/products/"+props.id}>
        <Card  className="my-3 p-3 text-center bg-info text-primary">
                <Card.Body style={{display: "flex"}}>
                    <div>
                    <Card.Img src={props.image}></Card.Img>
                    </div>
                    <div>
                    <Card.Title className="product-title-simple">{props.name}</Card.Title>
                    </div>
                </Card.Body>
        </Card>
        </Link>
    )
}

export default SimpleProduct;