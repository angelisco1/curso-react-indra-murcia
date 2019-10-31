import React, { Component } from 'react'
import Meme from './Meme';

export default class ListaMemes extends Component {
  render() {
    const listaMemes = this.props.memes.map(meme => {
      return <Meme key={meme.id} {...meme} onDeleteMeme={this.props.onDeleteMeme} mostrarBotonEliminar={true} />
    });

    return (
      <div>
        <h2>Lista memes</h2>
        {listaMemes}
      </div>
    )
  }
}
