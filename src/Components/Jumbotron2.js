import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'
import bg from '../Materials/Virus.jpg'
import styled from 'styled-components';

const Styles = styled.div`
.jumbo{
    background: url(${bg}) no-repeat fixed bottom;
    background-size:cover;
    color:#efefef;
    height:400px;
    position:relative;
    z-index:-2;
}

.overlay {
    background-color:black;
    opacity: 0.6; //Затемнение
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
} 
`;

const Jumbotron2 = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
        <h1>Компьютерные вирусы и вредоносное ПО:</h1>
        <h1>Что это такое и как защититься?</h1>
        </Container>
    </Jumbo>
    </Styles>
)
export default Jumbotron2;