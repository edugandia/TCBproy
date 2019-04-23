import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import infoProyects from './data/infoProyects.json'

import MainView from './components/mainView';
import AvisoLegal from './components/avisoLegal';
// import PoliticaPrivacidad from './components/politicaPrivacidad';
// import PoliticaCookies from './components/politicaCookies';
import Proyects from './components/proyects';
import Footer from './components/footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      redirectToProyects: false,
      numberOfProyects: infoProyects.length
    }
  }



  proyectIdPicker = (id) => {
    this.setState({ ...this.state, proyectSelectedId: id })
  }

  proyectNavController = operation => {
    let proyectSelectedId = this.state.proyectSelectedId;
    if (operation === "prev") {
      this.state.proyectSelectedId !== 0 ? proyectSelectedId-- : proyectSelectedId = (this.state.numberOfProyects - 1);
    }
    if (operation === "next") {
      this.state.proyectSelectedId !== (this.state.numberOfProyects - 1) ? proyectSelectedId++ : proyectSelectedId = 0;
    }
    this.setState({ ...this.state, proyectSelectedId })
  }

  render() {

    return (
      <div className="App" >
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainView proyectIdPicker={this.proyectIdPicker} />
            )}
          />
          <Route
            exact
            path="/aviso-legal"
            render={() => (
              <AvisoLegal />
            )}
          />
          {/* <Route
            exact
            path="/politica-privacidad"
            render={() => (
              <PoliticaPrivacidad />
            )}
          /> */}
          {/* <Route
            exact
            path="/politica-cookies"
            render={() => (
              <PoliticaCookies />
            )}
          /> */}
          <Route
            exact
            path="/proyects"
            render={() => (
              <Proyects proyectSelectedId={this.state.proyectSelectedId}
                proyectNavController={this.proyectNavController} />
            )}
          />
        </Switch>
        {/* <PoliticaCookies /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
