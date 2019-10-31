import React, { Component } from 'react'
import ListaItems from './ListaItems';
import withData from './withData';

export default class Hocs extends Component {
  render() {
    const ListaItemsConDatos = withData(ListaItems, 'http://api.icndb.com/jokes/random/3');

    return (
      <div>
        <ListaItemsConDatos />
      </div>
    )
  }
}
