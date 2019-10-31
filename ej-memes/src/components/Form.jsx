import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onHandleSubmit}>
        <div>
          <label htmlFor="textoArriba">Texto Arriba:</label>
          <input type="text" id="textoArriba" name="textoArriba" value={this.props.textoArriba} onChange={this.props.onHandleChange} />
        </div>
        <div>
          <label htmlFor="textoAbajo">Texto Abajo:</label>
          <input type="text" id="textoAbajo" name="textoAbajo" value={this.props.textoAbajo} onChange={this.props.onHandleChange} />
        </div>
        <div>
          <label htmlFor="imgUrl">Url imagen:</label>
          <input type="text" id="imgUrl" name="imgUrl" value={this.props.imgUrl} onChange={this.props.onHandleChange} />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input type="color" id="color" name="color" value={this.props.color} onChange={this.props.onHandleChange} />
        </div>
        <button type="submit">Generar</button>
      </form>
    )
  }
}
