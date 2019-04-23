import React, { Component } from "react";
import "./Manifiesto.scss";
import employeesList from "../../../data/employees.json";

export default class Manifiesto extends Component {
  render() {
    return (
      <div id="manifiesto-general-container">
        <div className="wave-container">
          <img src="./images/Wave_pink_v01.gif" alt="onda-rosa" />
        </div>
        <div className="content-container">
          <div className="title pink">
            <h1>manifiesto</h1>
          </div>
          <div className="text">
            <p>
              “Lorem ipsum dolorsitamet,consect etueradipi scingelit,seddiam
              nonummynibh euismodti nciduntut laoreetdo lorem agnaaliquam
              eratvolutp at.Utwis ienim adminim veniam,quisnostr udexe rci
              tationull amcor persusci p itlob orti snislut aliqu i pexea commo
              doconsequ at.Du is aut em veleum iriuredolorin hendreri ti
              nvulputatevel ite ssemolestiecon sequat,velillum doloreeu feu
              giatnulla faci lisisatver oeros etaccum saneti ustoodiodigni ssim
              quiblandit.”
            </p>
            <p className="signature">Manuel Arce, socio fundador.</p>
          </div>
        </div>
        <div className="employees-container">
          {employeesList.map((employee, i) => {
            return (
              <div key={i} className="employee-box">
                <img src={employee.image} alt={employee.name} />
                <h3 className={`fade-in-fwd ${employee.color}`}>{employee.name}</h3>
              </div>
            );
          })}
        </div>
        <div className="image-container-m  image-container-manifiesto" />
      </div>
    );
  }
}
