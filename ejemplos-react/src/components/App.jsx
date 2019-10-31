import React from 'react';
import Intro from './introduccion/Intro';
import CicloDeVida from './ciclo-de-vida/CicloDeVida';
import Formulario from './formulario/Formulario';
import Layouts from './layouts/Layouts';
import OtrasCosas from './OtrasCosas/OtrasCosas';
import Hocs from './Hocs/Hocs';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hola mundo!</h1>
        {/* <Intro /> */}
        {/* <CicloDeVida /> */}
        {/* <Formulario /> */}
        {/* <Layouts /> */}
        {/* <OtrasCosas /> */}
        <Hocs />
      </React.Fragment>
    )
  }
}

export default App;