import React, { Component } from 'react'

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      aceptarTerminosYCondiciones: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.type === 'checkbox' ? !this.state.aceptarTerminosYCondiciones : event.target.value
    })
  }

  login(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
    this.setState({
      email: '',
      password: '',
      aceptarTerminosYCondiciones: false
    })
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="terminos">Aceptas los terminos y condiciones...</label>
          <input type="checkbox" name="aceptarTerminosYCondiciones" id="terminos" value="yes" onChange={this.handleChange} checked={this.state.aceptarTerminosYCondiciones} />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}
