import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import infoProyects from "./data/infoProyects.json";
import MainView from "./components/mainView";
import AvisoLegal from "./components/avisoLegal";
import Proyects from "./components/proyects";

class App extends Component {
  constructor() {
    super();
    this.state = {
      redirectToProyects: false,
      numberOfProyects: infoProyects.length,
      anchorId: "top",
      proyectSelectedId: 0
    };
  }

  proyectIdPicker = id => {
    this.setState({ ...this.state, proyectSelectedId: id });
  };

  anchorIdSelector = position => {
    this.setState({ ...this.setState, anchorId: position });
  };

  proyectNavController = operation => {
    let proyectSelectedId = this.state.proyectSelectedId;
    if (operation === "prev") {
      this.state.proyectSelectedId !== 0
        ? proyectSelectedId--
        : (proyectSelectedId = this.state.numberOfProyects - 1);
    }
    if (operation === "next") {
      this.state.proyectSelectedId !== this.state.numberOfProyects - 1
        ? proyectSelectedId++
        : (proyectSelectedId = 0);
    }
    this.setState({ ...this.state, proyectSelectedId });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainView
                anchorId={this.state.anchorId}
                proyectIdPicker={this.proyectIdPicker}
                anchorIdSelector={this.anchorIdSelector}
              />
            )}
          />
          <Route
            exact
            path="/proyects"
            render={() => (
              <Proyects
                proyectSelectedId={this.state.proyectSelectedId}
                proyectNavController={this.proyectNavController}
                anchorIdSelector={this.anchorIdSelector}
              />
            )}
          />
          <Route exact path="/aviso-legal" render={() => <AvisoLegal />} />
        </Switch>
      </div>
    );
  }
}

export default App;
