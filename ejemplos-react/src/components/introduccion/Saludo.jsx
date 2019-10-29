import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Saludo extends Component {
  render() {
    return (
      <div>
        <p>Hola {this.props.nombre}</p>
      </div>
    )
  }
}

Saludo.propTypes = {
  nombre: PropTypes.string.isRequired
}

Saludo.defaultProps = {
  nombre: 'Mundo!'
}
