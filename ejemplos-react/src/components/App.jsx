import React from 'react';
import Intro from './introduccion/Intro';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hola mundo!</h1>
        <Intro />
      </div>
    )
  }
}

export default App;