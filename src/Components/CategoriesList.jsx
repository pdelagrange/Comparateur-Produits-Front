import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//services imports
import * as categoriy_service from '../Services/Category.Service';

//mui imports
import Grid from '@mui/material/Grid';
//import Button from '@mui/material/Button';

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        categoriy_service.getCategories()
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error));
    }, []);

    console.log(categories)
    return (
        <div>
            <Container>
                <Row>
                    {categories.map((item, index) => (
                        <Col key={item.id} md={6}>
                            <Card className="my-3 p-3 text-center bg-secondary">
                                <Card.Body>
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

