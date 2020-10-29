import React from 'react';
import {Button, Container} from 'react-bootstrap';


const Welcome = ({onsubmit}) => (
    <Container className="welcome">
        <Button onClick={onsubmit} className="card-btn">Go to shop</Button>
    </Container>
);

export default Welcome;