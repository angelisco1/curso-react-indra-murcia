import React, { Component } from 'react'
import { ctxModoOscuro } from './OtrasCosas';


export default class Context extends Component {
  render() {
    return (
      <ctxModoOscuro.Consumer>
        {(modoOscuro) => {

          return (
            <div>
              <p>Modo oscuro: {modoOscuro ? 'Activado' : 'Desactivado'}</p>
            </div>
          )

        }}
      </ctxModoOscuro.Consumer>
    )

  }
}
