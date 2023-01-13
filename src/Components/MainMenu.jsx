import React, { useState, useEffect } from 'react';
import { useToken } from "../Utils/Token";
import SimpleProduct from "../Components/SimpleProduct"

import { getLatests } from '../Services/Product.Service';

//bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const MainMenu = () => {
    const [latest, setLatest] = useState([]);
    useEffect(() => {
        getLatests()
            .then(response => response.json())
            .then(data => setLatest(data) )
            .catch(error => console.log(error));

    }, []);

    const token = useToken();
    const user = token.getUserConnected();

    return (
        <div className='mt-5 d-flex align-items-stretch' id='main-menu'>
            <div className='p-2 flex-fill'>
                <Container>
                    <Row md={3}>
                        <Col>
                            <Card className='bg-primary text-white title-card justify-content-center'>
                                <p className='fs-1 text-center'>Ajouts récents</p>
                            </Card>
                        </Col>
                        {latest.map((item, index) => (
                            <Col key={item.id}>
                                <SimpleProduct product={item}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default MainMenu
