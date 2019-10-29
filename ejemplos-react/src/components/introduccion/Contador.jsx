import React, { Component } from 'react'

export default class Contador extends Component {


  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onHandleClick}>-</button>
        <button type="button" onClick={() => this.props.calculaCuenta('-')}>-</button>
        <span>Cuenta: {this.props.cuenta}</span>
        <button type="button" onClick={this.props.onHandleClick}>+</button>
        <button type="button" onClick={() => this.props.calculaCuenta('+')}>+</button>
      </div>
    )
  }
}
