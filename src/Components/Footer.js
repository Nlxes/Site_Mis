import React from 'react';
import { Container} from 'react-bootstrap';

const Footer = () => (
    <Container fluid style={{ backgroundColor: '#000', color: '#fff'}}>
        <Container style={{ display :'flex', justifyContent: 'center', padding: '10px'}}>
            <p>By Dmitriev Nikita</p>
        </Container>
    </Container>
)
export default Footer;