import React from 'react';
import Intro from './introduccion/Intro';
import CicloDeVida from './ciclo-de-vida/CicloDeVida';
import Formulario from './formulario/Formulario';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hola mundo!</h1>
        {/* <Intro /> */}
        {/* <CicloDeVida /> */}
        <Formulario />
      </div>
    )
  }
}

export default App;