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

    function handleClick(id){
        navigate(''+id)
    }

    const reload = async () => {
        await delay(200);
        location.reload()
    }

    const handleDelete = (e) => {
        console.log(e.target.id);
        category.deleteCategory(e.target.id);
        reload();
    }

    return (
        <div>
            <Container>
                <Row>
                    {categories.map((item, index) => (
                        <Col key={item.id} md={4}>
                            <Card className="my-3 p-3 bg-info text-center text-primary clickable">
                            <div style={{display:"flex"}}>
                                {user?.admin && <Card.Img id={item.id} onClick={handleDelete} className="white clickable-img" src='/icons/trash.svg'/>}
                            </div>
                                <Card.Body onClick={() => handleClick(item.id)}>
                                    <Card.Title>{item.name}</Card.Title>
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

