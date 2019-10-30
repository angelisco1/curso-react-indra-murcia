import React, { Component } from 'react'

export default class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
      otraCosa: '',
      intervalId: null
    }
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      console.log('Intervalo...');
    }, 1000);
    this.setState({
      intervalId: intervalId
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  static getDerivedStateFromProps(props) {
    return {color: props.cuenta < 0 ? 'red' : 'green'}
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.color !== nextState.color
  }

  render() {
    console.log('Se pinta');
    const styles = {
      width: '100px',
      height: '100px',
      backgroundColor: this.state.color
    }
    return (
      <div style={styles}>

      </div>
    )
  }
}
