import React, { Component } from 'react';
import infoProyects from '../../data/infoProyects.json';
import { Link, Redirect } from 'react-router-dom';

import StickyLogo from '../mainView/stickyLogo'
import './Proyects.scss';

export default class Proyects extends Component {
    render() {
        if (this.props.proyectSelectedId !== 0 && !this.props.proyectSelectedId) { return <Redirect to="/" /> }
        return (
            <div id="proyectos-general-container">
                <div className="logo-bar">
                    <img className={`sticky-logo`} src="./images/Tacubaya_tacubaya.png" alt="logo" />
                </div>
                <div className="wave-container wave-container-proyect">
                    <img src="./images/thumbnail_amarillo.png" alt="onda-ama" />
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
                                </div>
                            </Link>
                            <h1>{infoProyects[this.props.proyectSelectedId].name}</h1>
                        </div>
                        <div className="text">
                            <p>{infoProyects[this.props.proyectSelectedId].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
