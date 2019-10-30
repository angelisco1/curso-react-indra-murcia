import React, { Component } from 'react'

export default class ListaItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{id: 0, nombre: 'Item 1'}, {id: 1, nombre: 'Item 2'}, {id: 2, nombre: 'Item 3'}]
    }
  }

  render() {
    const listaParrafos = this.state.items.map((item, pos) => {
      return <p key={item.id}>{item.nombre}</p>;
    });

    return (
      <div>
        {listaParrafos}
      </div>
    )
  }
}
