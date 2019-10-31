import React, { Component } from 'react'
import Meme from './Meme';
import Form from './Form';

const initialState = {
  textoArriba: 'Texto Arriba',
  textoAbajo: 'Texto Abajo',
  color: '#000000',
  imgUrl: 'https://i.imgflip.com/1bij.jpg',
}

export default class Generador extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSaveMeme(this.state);
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        <Meme {...this.state} />
        <Form {...this.state} onHandleChange={this.handleChange} onHandleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
