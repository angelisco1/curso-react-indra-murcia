import React from 'react';
import Axios from 'axios';
import Loader from './Loader';


const withData = (WrappedCmp, url) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        listaDatos: [],
        cargando: true
      }
    }

    componentDidMount() {
      setTimeout(() => {
        Axios.get(url)
          .then((resp) => {
            this.setState({
              listaDatos: resp.data.value,
              cargando: false
            })
          })
      }, 2000);
    }

    render() {
      return (
        <div>
          {this.state.cargando ? <Loader />  : <WrappedCmp datos={this.state.listaDatos} />}
        </div>
      )
    }
  }
}

export default withData;