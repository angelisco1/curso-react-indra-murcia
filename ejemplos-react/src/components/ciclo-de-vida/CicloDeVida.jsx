import React, { Component } from 'react'
import Color from './Color';
import ListaOfertas from './ListaOfertas';

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0,
      mostrar: true
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => {this.setState({cuenta: this.state.cuenta - 1})}}>-</button>
        <span>{this.state.cuenta}</span>
        <button type="button" onClick={() => {this.setState({cuenta: this.state.cuenta + 1})}}>+</button>
        <button type="button" onClick={() => this.setState({mostrar: !this.state.mostrar})}>Mostrar color</button>
        {this.state.mostrar ? <Color cuenta={this.state.cuenta} /> : null}
        <ListaOfertas />
      </div>
    )
  }
}
