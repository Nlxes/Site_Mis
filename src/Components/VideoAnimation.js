import React from 'react';
import Video from '../Materials/Video1.mp4'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';

export const  AboutContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-contect: center;
    align-items: center;
    padding: 0 30px;
    height: 790px;
    position: relative;
    z-index:1
    `

export const  AboutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottm: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    `
export const  AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    aligh-items: center;
    `
export const  AboutH1 = styled.div`
    color: #fff;
    font-size: 64px;
    text-align: center;
    `

export const  AboutP = styled.div`
    margin-top:24px;
    color: #fff;
    font-size: 24px;
    max-width: 830px;
    `

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    `

const Animation = () => {
    return(
    <AboutContainer>
       <AboutBg>
           <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </AboutBg> 
        <AboutContent>
            <AboutH1>О сайте:</AboutH1>
            <AboutP>Данный проект сделал студент группы ИЗ-21: Дмитриев Никита Олегович.</AboutP>
            <AboutP>Для реализации были использованы следующие инструменты:</AboutP>
            <AboutP>- React Bootsrap</AboutP>
            <AboutP>- Styled Components</AboutP>
            <AboutP>- HTML</AboutP>
            <AboutP>- CSS/SCSS</AboutP>
            <AboutP>- JavaScript</AboutP>
        </AboutContent>
    </AboutContainer>
    );
};

export default Animation;