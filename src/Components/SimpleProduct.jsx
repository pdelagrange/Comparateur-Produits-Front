import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as productService from '../Services/Product.Service'
import { useToken } from "../Utils/Token";
import {BufferToUri} from "../Utils/Utils";
const SimpleProduct = (props) => {

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const url = `${BASE_URL}`;

    const navigate = useNavigate();

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const product = props.product;

    /*
    let img;
    if(!product.image){
         img = '/icons/no-photo.png';
    } else {
         img = BufferToUri(product.image.data);
    }*/

    const imgSrc = `${url+"/products/"+product.id+"/image"}`

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

    // modifier produit
    // {user?.admin && <Card.Img onClick={handleModify} className="white clickable" src='/icons/pencil.svg' />}

    return (
        <Card className="my-3 p-3 text-center bg-info text-primary card" variant="bg-primary">
            <div style={{display:"flex"}}>
            {user?.admin && <Card.Img onClick={handleDelete} className="white clickable" src='/icons/trash.svg'/>}
            </div>
                <a className="text-primary" href={"/products/"+product.id}>
                <Card.Body>
                    <div>
                    <Card.Img className="rounded mx-auto d-block img-fluid image" src={imgSrc}></Card.Img>
                    </div>
                    <div>
                    <Card.Title className="mt-2">{product.name}</Card.Title>
                    </div>
                </Card.Body>
                </a>
        </Card>
    )
}

export default SimpleProduct;