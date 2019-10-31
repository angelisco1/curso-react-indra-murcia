import React from 'react';
import Generador from './Generador'
import ListaMemes from './ListaMemes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      nextId: 0
    }
    this.guardarMeme = this.guardarMeme.bind(this);
    this.deleteMeme = this.deleteMeme.bind(this);
  }

  guardarMeme(nuevoMeme) {
    nuevoMeme.id = this.state.nextId;
    this.setState({
      memes: [...this.state.memes, nuevoMeme],
      nextId: this.state.nextId + 1
      // memes: [].concat(this.state.memes, [nuevoMeme])
    })
  }

  deleteMeme(id) {
    this.setState({
      memes: this.state.memes.filter(meme => {
        return id !== meme.id;
      })
    })
  }

  render() {
    return (
      <div>
        <Generador onSaveMeme={this.guardarMeme} />
        <ListaMemes memes={this.state.memes} onDeleteMeme={this.deleteMeme} />
      </div>
    )
  }
}

export default App;