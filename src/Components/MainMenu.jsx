import React, { useState, useEffect } from 'react';
import { useToken } from "../Utils/Token";

import { getProducts } from '../Services/Product.Service';

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const MainMenu = () => {
    const [latest, setLatest] = useState([]);
    const best = [{ name: "empty" }, { name: "empty" }, { name: "empty" }]
    useEffect(() => {
        getProducts()
            .then(response => response.json())
            .then(data => setLatest(data))
            .catch(error => console.log(error));

    }, []);

    const [short, setShort] = useState([]);

    const token = useToken();
    const user = token.getUserConnected();

    return (
        <div className='mt-5 d-flex align-items-stretch' id='main-menu'>
            <div className='p-2 flex-fill'>
                <Container>
                    <Row>
                        <Col>
                            <Card className="my-3 p-3 bg-primary text-center text-secondary">
                                <Card.Body>
                                    <Card.Title>Récents</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        {latest.map((item, index) => (
                            <Col key={item.id} md={6}>
                                <Card className="my-3 p-3 bg-info text-center text-primary" >
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>




            <div className='p-2 flex-fill'>
                <Container>
                    <Row>
                        <Col>
                            <Card className="my-3 p-3 bg-primary text-center text-secondary">
                                <Card.Body>
                                    <Card.Title>Mieux notés</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        {best.map((item, index) => (
                            <Col key={item.id} md={6}>
                                <Card className="my-3 p-3 bg-info text-center text-primary">
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MainMenu
