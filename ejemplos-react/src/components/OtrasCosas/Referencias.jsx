import React, { Component } from 'react'

export default class Referencias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'Play'
    }
    this.audio = React.createRef();
    this.play = this.play.bind(this);
    this.silenciar = this.silenciar.bind(this);
  }

  play() {
    // console.log(this.audio)
    const audioTag = this.audio.current;
    if (audioTag.paused) {
      audioTag.play();
      this.setState({txt: 'Pause'})
    } else {
      audioTag.pause();
      this.setState({txt: 'Play'})
    }
  }

  silenciar() {
    this.audio.current.volume = this.audio.current.volume == 0 ? 1 : 0;
  }

  render() {
    return (
      <React.Fragment>
        <audio src="sonido-piolin.m4a" ref={this.audio}></audio>
        <button type="button" onClick={this.silenciar}>Sssshh</button>
        <button type="button" onClick={this.play}>{this.state.txt}</button>
      </React.Fragment>
    )
  }
}
