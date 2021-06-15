import React from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Jumbotron from '../Components/Jumbotron';
import Footer from '../Components/Footer';
import Example from '../Components/Show';
import Coding from '../Materials/ManCoding.svg'
import Secure from '../Materials/Secure.svg'
import Otstup from '../Materials/Otstup.png'
export const Page1 = () => (
    <>
    <Jumbotron />
    <Container>
    <Row>
            <Col><img src={Coding} width={600}/></Col>
            <Col>
            <p><strong>Компьютерная безопасность</strong> - это область знаний, охватывающая модели, методы, программные,
            аппаратно-программные средства, системы защиты информации при ее обработке, хранении и передаче
            с использованием информационных технологий.Компьютерная безопасность - это защита информации на
            компьютере, на мобильных устройствах от различного рода случайных или умышленных её повреждений,
            удаления, а также защита персональных данных на компьютере от взлома и кражи. К задачам компьютерной
            безопасности относится стабильность работы программ, операционных систем, компьютерных сетей.</p>
            <Example />
            </Col>
    </Row>
    <Row>
    <Col><img src={Otstup} height={250}/></Col>
    </Row>
    <Row>
            <Col>
                <p><strong>Информационная безопасность</strong> – это сохранение и защита информации, а также ее важнейших элементов,
                в том числе системы и оборудование, предназначенные для использования, сбережения и передачи этой
                информации. Другими словами, это набор технологий, стандартов и методов управления, которые необходимы
                для защиты информационной безопасности.
                Информационная безопасность – это сохранение и защита информации, а также ее важнейших элементов,
                в том числе системы и оборудование, предназначенные для использования, сбережения и передачи этой
                информации. Другими словами, это набор технологий, стандартов и методов управления, которые необходимы
                для защиты информационной безопасности.
                Информационная безопасность – это сохранение и защита информации, а также ее важнейших элементов,
                в том числе системы и оборудование, предназначенные для использования, сбережения и передачи этой
                информации. Другими словами, это набор технологий, стандартов и методов управления, которые необходимы
                для защиты информационной безопасности.</p>
        </Col>
        <Col><img src={Secure} width={600}/></Col>
        </Row>
    </Container>
    <Footer />
    </>
)