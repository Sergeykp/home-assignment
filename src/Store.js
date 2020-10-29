import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Card from './Card';
import data from './data.json';

const Store = () => (
    <Container>
        <Row>
            {data.map(item => <Card {...item}/>)}
        </Row>
    </Container>
);

export default Store;