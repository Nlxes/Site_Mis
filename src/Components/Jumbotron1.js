import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'
import bg from '../Materials/IB.jpg'
import styled from 'styled-components';

const Styles = styled.div`
.jumbo{
    background: url(${bg}) no-repeat fixed bottom;
    background-size:cover;
    color:#efefef;
    height:300px;
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

const Jumbotron1 = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
        <h1>Что ожидать от 2021 года в сфере ИБ?</h1>
        </Container>
    </Jumbo>
    </Styles>
)
export default Jumbotron1;