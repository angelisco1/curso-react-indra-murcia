import React from 'react';
import Saludo from './Saludo';
import SaludoFuncional from './SaludoFuncional';
import Contador from './Contador';
import ContadorHook from './ContadorHook';

class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0,
      otraCuenta: 0
    }
    this.onHandleClick = this.onHandleClick.bind(this);
    this.calculaCuenta = this.calculaCuenta.bind(this);
  }

  onHandleClick(event) {
    console.log('Has pulsado el botón');
    this.setState({
      cuenta: event.target.textContent === '-' ? this.state.cuenta - 1 : this.state.cuenta + 1
    })
  }

  calculaCuenta(operacion) {
    this.setState({
      cuenta: operacion === '-' ? this.state.cuenta - 1 : this.state.cuenta + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Introducción</h1>
        <p>Ejemplos del tema de introducción</p>
        <Saludo nombre="Angel" />
        <Saludo nombre="Falco" />
        <Saludo nombre={this.state.cuenta + ""}/>
        <SaludoFuncional nombre="Kozinsky" />
        <Contador cuenta={this.state.cuenta} onHandleClick={this.onHandleClick} calculaCuenta={this.calculaCuenta} />
        <ContadorHook />
      </div>
    )
  }
}

export default Intro;