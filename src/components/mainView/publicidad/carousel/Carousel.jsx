import React, { Component } from 'react';
import './Carousel.scss';
import { Link } from 'react-router-dom';
import infoProyects from '../../../../data/infoProyects.json'

export default class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            carouselPosition: 0,
            numberOfProyects: infoProyects.length
        }
    }

    carouselPositionController = (operation) => {
        let carouselPosition = this.state.carouselPosition;
        if (operation === "add") {
            carouselPosition < this.state.numberOfProyects - this.props.numberOfBoxes && carouselPosition++
        }
        if (operation === "substract") {
            carouselPosition > 0 && carouselPosition--
        }
        this.setState({ ...this.state, carouselPosition })
    }

    render() {
        const carouselIdArray = [];
        for (let i = 0; i < this.props.numberOfBoxes; i++) {
            carouselIdArray.push(i)
        }
        return (
            <div className="carousel">
                <div onClick={() => this.carouselPositionController("substract")} className={`carousel-substract ${this.state.carouselPosition < 1 && "unactive-button"}`}>
                    <img src="./images/thumbnail_flecha.png" alt="left-arrow" /></div>
                <div className="carousel-box-container">
                    {carouselIdArray.map((id, i) => {
                        return (<Link to="/proyects">
                            <div className="carousel-box" onClick={() => this.props.proyectIdPicker(this.state.carouselPosition + i)} key={id}>
                                <img src={infoProyects[this.state.carouselPosition + i].thumbnailImg} alt={this.state.carouselPosition + i} />
                                <div className="name-proyect-container">
                                    <p>{infoProyects[this.state.carouselPosition + i].name}</p>
                                </div>
                            </div>
                        </Link>)
                    })}
                </div>
                <div onClick={() => this.carouselPositionController("add")} className={`carousel-add ${this.state.carouselPosition > this.state.numberOfProyects - this.props.numberOfBoxes - 1 && "unactive-button"}`}>
                    <img src="./images/thumbnail_flecha.png" alt="right-arrow" />
                </div>
            </div>
        )
    }
}