import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Components/Footer';

class ExercisePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result1: 0,
      result2: 0,
      result3: 0,
      result4: 0,
      Radius: 0,
      F: 0,
      J: 0,
      X: 0,
      Value1: 0,
      Value2: 0,
      Value3: 0,
    };
    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
    this.handlenum3Change = this.handlenum3Change.bind(this);
    this.handlenum4Change = this.handlenum4Change.bind(this);
    this.handlenum5Change = this.handlenum5Change.bind(this);
    this.handlenum6Change = this.handlenum6Change.bind(this);
    this.handlenum7Change = this.handlenum7Change.bind(this);
  }
  handlenum1Change(evt) {
    console.log(evt.target.value);
    this.setState({ Radius: Number(evt.target.value) });
  }
  handlenum2Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ F: Number(evt.target.value) });
  }
  handlenum3Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ J: Number(evt.target.value) });
  }
  handlenum4Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ X: Number(evt.target.value) });
  }
  handlenum5Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ Value1: Number(evt.target.value) });
  }
  handlenum6Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ Value2: Number(evt.target.value) });
  }
  handlenum7Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ Value3: Number(evt.target.value) });
  }


  Action1 = (event) => {
    let x = Math.pow(this.state.Radius,3) * 4/3 * 3.14;
    this.setState({ result1: x });
  };

  Action2 = (event) => {
    let x = Math.sin(4 * this.state.J) + 6.7/(this.state.F - 1.5 * this.state.J);
    this.setState({ result2: x });
  };

  Action3 = (event) => {
    if (this.state.X < -4)
    {
      let y = 5 * this.state.X;
      this.setState({ result3: y });
    } 
    else if ( this.state.X <= 7 && this.state.X >= -4)
    {
      let y = 0;
      this.setState({ result3: y });
    }
    else
    {
      let y = -5 * this.state.X;
      this.setState({ result3: y });
    }
  };

  Action4 = (event) => {
    let result = Math.min(this.state.Value1, this.state.Value2, this.state.Value3);
    this.setState({ result4: result });
  };

  render() {
    return (
    <>
    <h2 align="center">10 вариант</h2>
      <Container>
          <p align="center"><strong>Задание 1.</strong> Разработать программу, вычисляющую объем шара (V) по формуле V = 4/3 Pi R3; pi=3,14.</p>
        <Row className="justify-content-md-center mb-5">
          <Col md="auto" className='text-dark'>
            Введите радиус шара:
            <input type='text' onChange={this.handlenum1Change} />
            <input type='button' onClick={this.Action1} value='Вычислить'/>
            <br />
            <br />
            Объем шара:
            <input type='text' value={this.state.result1} readOnly />
          </Col>
          </Row>

          <p align="center"><strong>Задание 2.</strong> Вычислить значение Y по формуле Y = sin(4*J)+6.7/F-1.5*J.</p>

          <Row className='justify-content-md-center mb-5'>
          <Col md="auto" className='text-dark'>
            F =
            <input type='text' onChange={this.handlenum2Change} />
            <p></p>
            J =
            <input type='text' onChange={this.handlenum3Change} />
            <br />
            <br />
            <input
              type='button'
              onClick={this.Action2}
              value='Вычислить Y'
            />
            <br />
            <input type='text' value={this.state.result2} readOnly />
          </Col>
        </Row>

        <p align="center"><strong>Задание 3.</strong> Разработать программу, вычисляющую значение функции Y(X):</p>

        <Row className='justify-content-md-center mb-5'>
          <Col md="auto" className='text-dark'>
            Введите X:
            <br />
            <input type='text' onChange={this.handlenum4Change} />
            <br />
            <br />
            <input type='button' onClick={this.Action3} value='Вычислить Y' />
            <br />
            <input type='text' value={this.state.result3} readOnly />
            <br />
            <br />
          </Col>
          <Col md="auto" className='text-dark'>
          <br />
              <p align="bottom">Y = 5*X, при X{'<'}-4;</p>
              <p>Y = 0, при -4{'<'}= X {'<'}=7;</p>
              <p>Y = -5*x, при X{'>'}7.</p>
          <br />
          </Col>
          </Row>

          <p align="center"><strong>Задание 4.</strong> Найти наименьшее из трех заданных чисел.</p>

          <Row className='justify-content-md-center mb-5'>
          <Col md="auto" className='text-dark'>
            <br />
            Введите 1 число
            <br />
            <input type='text' onChange={this.handlenum5Change} />
            <br />
            Введите 2 число
            <br />
            <input type='text' onChange={this.handlenum6Change} />
            <br />
            Введите 3 число
            <br />
            <input type='text' onChange={this.handlenum7Change} />
            <br />
            <br />
            <input
              type='button'
              onClick={this.Action4}
              value='Наименьшее число:'
            />
            <br />
            <input type='text' value={this.state.result4} readOnly />
            <br />
          </Col>
        </Row>
      </Container>
          <Footer />
        </>
    );
  }
}
export default ExercisePage;
