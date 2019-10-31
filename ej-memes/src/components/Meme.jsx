import React, { Component } from 'react'

export default class Meme extends Component {
  render() {
    const styles = {
      color: this.props.color
    }

    return (
      <div>
        <p style={styles}>{this.props.textoArriba}</p>
        <img src={this.props.imgUrl} alt="Imagen del meme"/>
        <p style={styles}>{this.props.textoAbajo}</p>
        {this.props.mostrarBotonEliminar ? <button type="button" onClick={() => this.props.onDeleteMeme(this.props.id)}>Eliminar</button> : null}
      </div>
    )
  }
}
