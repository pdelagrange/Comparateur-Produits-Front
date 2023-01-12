import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as productService from '../Services/Product.Service'
import { useToken } from "../Utils/Token";
import {BufferToUri} from "../Utils/Utils";
const SimpleProduct = (props) => {

    const navigate = useNavigate();

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const product = props.product;

    let img;
    if(!product.image){
         img = '/icons/no-photo.png';
    } else {
         img = BufferToUri(product.image.data);
    }

    const token = useToken();
    const user = token.getUserConnected();
    //user?.admin

    const handleModify = () => {
        navigate('/product/add')
    }

    const reload = async () => {
        await delay(200);
        location.reload()
    }

    const handleDelete = (e) => {
        productService.deleteProduct(product.id);
        reload();
    }

    return (
        <Card  className="my-3 p-3 text-center bg-info text-primary">
            <div style={{display:"flex"}}>
            {user?.admin && <Card.Img onClick={handleModify} className="white clickable" src='/icons/pencil.svg' />}
            {user?.admin && <Card.Img onClick={handleDelete} className="white clickable" src='/icons/trash.svg'/>}
            </div>
                <a className="text-primary" href={"/products/"+product.id}>
                <Card.Body style={{display: "flex"}}>
                    <div>
                    <Card.Img className="image" src={img}></Card.Img>
                    </div>
                    <div>
                    <Card.Title className="product-title-simple">{product.name}</Card.Title>
                    </div>
                </Card.Body>
                </a>
        </Card>
    )
}

export default SimpleProduct;