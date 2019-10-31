import React, { Component } from 'react'

export default class ListaItems extends Component {
  render() {
    const listaItems = this.props.datos.map(d => {
      return <p key={d.id}>{d.joke}</p>
    })

    return (
      <div>
        {listaItems}
      </div>
    )
  }
}
