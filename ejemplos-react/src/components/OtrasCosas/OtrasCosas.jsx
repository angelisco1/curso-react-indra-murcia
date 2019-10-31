import React, { Component } from 'react'
import Referencias from './Referencias'
import Estilos from './Estilos'
import Context from './Context'

export const ctxModoOscuro = React.createContext();

export default class OtrasCosas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modoOscuro: false,
      idioma: 'es'
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => {
          this.setState({modoOscuro: !this.state.modoOscuro})
        }}>Cambiar modo oscuro</button>
        <Referencias />
        <Estilos />
        <ctxModoOscuro.Provider value={this.state.modoOscuro}>
          <Context />
        </ctxModoOscuro.Provider>
      </div>
    )
  }
}
