import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'
import bg from '../Materials/background.jpg'
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
    opacity: 0.5; //Затемнение
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
} 
`;

const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Все что нужно знать о компьютерной безопасности</h1>
            <p>Это раздел информационной безопасности, в рамках которого изучают
            процессы формирования, функционирования и эволюции киберобъектов, для
            выявления источников киберопасности, образующихся при этом, определение
            их характеристик, а также их классификацию и формирование нормативных
            документов, выполнение которых должно гарантировать защиту киберобъектов
            от всех выявленных и изученных источников киберопасности.</p>
        </Container>
    </Jumbo>
    </Styles>
)

export default Jumbotron;