import React, { Component } from 'react';
import infoProyects from '../../data/infoProyects.json';
import { Link, Redirect } from 'react-router-dom';
import utils from '../../utils/utils'
import './Proyects.scss';

export default class Proyects extends Component {
    componentWillMount(){
        window.scrollTo(0,0)
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.proyectSelectedId !== prevProps.proyectSelectedId) {
          utils.scrollToId("proyectos-general-container")
        }
      }

    render() {
        if (this.props.proyectSelectedId !== 0 && !this.props.proyectSelectedId) { return <Redirect to="/" /> }
        return (
            <div id="proyectos-general-container">
                <div className="logo-bar-proyects">
                    <img className="sticky-logo-proyect" src="./images/Tacubaya_tacubaya_mob.png" alt="logo" />
                </div>
                <div className="wave-container wave-container-proyect">
                    <img src="./images/Wave_cyan_v01.gif" alt="onda-ama" />
                </div>
                <div className="body-proyect-container">
                    <div className="proyect-navigation">
                        <div className="prev-btn" onClick={() => this.props.proyectNavController("prev")}>
                            <img src="./images/flecha.png" alt="prev-arrow" />
                        </div>
                        <div className="next-btn" onClick={() => this.props.proyectNavController("next")}>
                            <img src="./images/flecha.png" alt="next-arrow" />
                        </div>
                    </div>
                    <div className="content-container">
                        <div className="title yellow proyect-title">
                            <Link to="/">
                                <div className="home-link">
                                    <img src="./images/flecha-atras.png" alt="arrow-white" />
                                </div>
                            </Link>

                            <h1>{infoProyects[this.props.proyectSelectedId].name}</h1>
                        </div>
                        <div className="text">
                            <p>{infoProyects[this.props.proyectSelectedId].description}</p>
                        </div>
                        <div className="images-container">
                            {infoProyects[this.props.proyectSelectedId].images.h1 &&
                                <div className="row1">
                                    <img src={infoProyects[this.props.proyectSelectedId].images.h1} alt="h1" />
                                </div>}
                            {(infoProyects[this.props.proyectSelectedId].images.v1 && infoProyects[this.props.proyectSelectedId].images.v2) &&
                                <div className="row2">
                                    {infoProyects[this.props.proyectSelectedId].images.v1 && <img src={infoProyects[this.props.proyectSelectedId].images.v1} alt="v1" />}
                                    {infoProyects[this.props.proyectSelectedId].images.v2 && <img src={infoProyects[this.props.proyectSelectedId].images.v2} alt="v2" />}
                                </div>}
                            {infoProyects[this.props.proyectSelectedId].images.h2 &&
                                <div className="row3">
                                    <img src={infoProyects[this.props.proyectSelectedId].images.h2} alt="h1" />
                                </div>}
                            {infoProyects[this.props.proyectSelectedId].images.h3 &&
                                <div className="row4">
                                    <img src={infoProyects[this.props.proyectSelectedId].images.h3} alt="h1" />
                                </div>}
                            {(infoProyects[this.props.proyectSelectedId].images.v3 && infoProyects[this.props.proyectSelectedId].images.v4) &&
                                <div className="row5">
                                    {infoProyects[this.props.proyectSelectedId].images.v3 && <img src={infoProyects[this.props.proyectSelectedId].images.v3} alt="v1" />}
                                    {infoProyects[this.props.proyectSelectedId].images.v4 && <img src={infoProyects[this.props.proyectSelectedId].images.v4} alt="v2" />}
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
