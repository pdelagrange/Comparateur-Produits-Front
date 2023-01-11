import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as product from '../Services/Product.Service'
import { useToken } from "../Utils/Token";
const SimpleProduct = (props) => {

    const navigate = useNavigate();

    const token = useToken();
    const user = token.getUserConnected();
    //user?.admin

    const handleModify = () => {
        navigate('/product/add')
    }

    const handleDelete = (e) => {
        product.deleteProduct(props.id);
    }

    return (
        <Card  className="my-3 p-3 text-center bg-info text-primary">
            <div style={{display:"flex"}}>
            {user?.admin && <Card.Img onClick={handleModify} className="white clickable-img" src='/icons/pencil.svg' />}
            {user?.admin && <Card.Img onClick={handleDelete} className="white clickable-img" src='/icons/trash.svg'/>}
            </div>
                <a className="text-primary" href={"/products/"+props.id}>
                <Card.Body style={{display: "flex"}}>
                    <div>
                    <Card.Img src={props.image}></Card.Img>
                    </div>
                    <div>
                    <Card.Title className="product-title-simple">{props.name}</Card.Title>
                    </div>
                </Card.Body>
                </a>
        </Card>
    )
}

export default SimpleProduct;