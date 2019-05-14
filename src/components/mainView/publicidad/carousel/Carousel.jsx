import React, { Component } from "react";
import "./Carousel.scss";
import { Link } from "react-router-dom";
import infoProyects from "../../../../data/infoProyects.json";

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      carouselPosition: 0,
      numberOfProyects: infoProyects.length,
      proyectHover: false
    };
  }

  proyectToggle = id => {
    this.setState({ ...this.state, proyectHover: id });
  };

  carouselPositionController = operation => {
    let carouselPosition = this.state.carouselPosition;
    if (operation === "add") {
      carouselPosition <
        this.state.numberOfProyects - this.props.numberOfBoxes &&
        carouselPosition++;
    }
    if (operation === "substract") {
      carouselPosition > 0 && carouselPosition--;
    }
    this.setState({ ...this.state, carouselPosition });
  };

  render() {
    const carouselIdArray = [];
    for (let i = 0; i < this.props.numberOfBoxes; i++) {
      carouselIdArray.push(i);
    }
    return (
      <div className="carousel">
        <div className="previsualizador">
          {infoProyects.map((proyect, i) => {
            return (
              <div
                className={`prev-proyect-container ${this.state.proyectHover !==
                  proyect.id && "hiden-img"} swing-in-top-fwd `}
                key={i}
              >
                <img src={proyect.prevImage} alt={i} />
                <h1>{proyect.name}</h1>
              </div>
            );
          })}
        </div>
        <div className="carousel-miniatures">
          <div
            onClick={() => this.carouselPositionController("substract")}
            className={`carousel-substract ${this.state.carouselPosition < 1 &&
              "unactive-button"}`}
          >
            <img src="./images/thumbnail_flecha.png" alt="left-arrow" />
          </div>
          <div className="carousel-box-container">
            {carouselIdArray.map((id, i) => {
              return (
                <Link to="/proyects" key={i}>
                  <div
                    className="carousel-box"
                    onMouseEnter={() =>
                      this.proyectToggle(this.state.carouselPosition + i)
                    }
                    onMouseLeave={() => this.proyectToggle(false)}
                    onClick={() =>
                      this.props.proyectIdPicker(
                        this.state.carouselPosition + i
                      )
                    }
                    key={id}
                  >
                    <img
                      src={
                        infoProyects[this.state.carouselPosition + i]
                          .thumbnailImg
                      }
                      alt={this.state.carouselPosition + i}
                    />
                    <div className="name-proyect-container">
                      <p>
                        {infoProyects[this.state.carouselPosition + i].name}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div
            onClick={() => this.carouselPositionController("add")}
            className={`carousel-add ${this.state.carouselPosition >
              this.state.numberOfProyects - this.props.numberOfBoxes - 1 &&
              "unactive-button"}`}
          >
            <img src="./images/thumbnail_flecha.png" alt="right-arrow" />
          </div>
        </div>
      </div>
    );
  }
}
