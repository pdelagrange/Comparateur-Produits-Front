import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const SimpleProduct = (props) => {

    console.log(props.name);

    const imgSrc = `url(data:image/jpeg;base64,${props.image})`;

    return (
        <Link to={"/products/"+props.id}>
        <Card  className="my-3 p-3 text-center bg-info text-primary">
                <Card.Body style={{display: "flex"}}>
                    <div>
                    <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"></Card.Img>
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