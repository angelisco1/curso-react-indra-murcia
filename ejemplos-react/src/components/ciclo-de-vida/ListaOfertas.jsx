import React, { Component } from 'react'
import Axios from 'axios';
import Oferta from './Oferta';

export default class ListaOfertas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ofertas: []
    }
  }

  componentDidMount() {
    Axios.get('https://fluentjobs-fa22e.firebaseio.com/trabajos.json')
      .then((resp) => {
        const datos = resp.data;
        const ofertas = [];

        for (let id in datos) {
          ofertas.push({id: id, ...datos[id]})
        }

        this.setState({
          ofertas: ofertas
        });
      })
  }

  render() {
    const listaOfertas = this.state.ofertas.map((oferta) => {
      return <Oferta key={oferta.id} {...oferta} />
    });
    return (
      <div>
        {listaOfertas}
      </div>
    )
  }
}
