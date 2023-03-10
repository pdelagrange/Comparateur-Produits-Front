import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//services imports
import * as categoriy_service from '../Services/Category.Service';

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import * as category from '../Services/Category.Service'
import { useToken } from "../Utils/Token";

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const token = useToken();
    const user = token.getUserConnected();
    //user?.admin

    useEffect(() => {
        categoriy_service.getCategories()
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);

    function handleClick(id) {
        navigate('' + id)
    }

    const handleModify = (id) => {
        navigate('/category/modify/'+id)
    }

    const reload = async () => {
        await delay(500);
        window.location.reload();
    }

    const handleDelete = (e) => {
        category.deleteCategory(e.target.id);
        reload();
    }

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    {categories.map((item, index) => (
                        <Col key={item.id} md={4}>
                            <Card className="my-3 p-5 bg-info text-center text-primary clickable card">
                            <div style={{ display: "flex" }}>
                                        {user?.admin && <Card.Img id={item.id} onClick={handleDelete} className="white clickable-img" src='/icons/trash.svg' />}
                                        {user?.admin && <Card.Img onClick={() => handleModify(item.id)} className="white clickable" src='/icons/pencil.svg' />}
                            </div>
                                <Card.Body className="d-flex justify-content-center align-items-center" onClick={() => handleClick(item.id)}>
                                    <Card.Title className="fs-2">{item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default CategoriesList;

