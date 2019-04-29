import React, { Component } from "react";
import "./Manifiesto.scss";
import employeesList from "../../../data/employees.json";
import utils from "../../../utils/utils";

const randomList = utils.shuffle(employeesList)

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
              Somos Tacubaya en homenaje a cada una de esas personas que un
              día tuvieron un sueño (muy despiertos) y lo vivieron emigrando a
              principios del siglo XX a México a “hacer las Américas".
            </p>
            <p>
              Más de un siglo después algo permanece inquebrantable: los sueños,
              la fortaleza, las ganas y el compromiso de seguir haciendo lo que
              nos gusta de la mejor manera posible.
            </p>
            <p>
              En Tacubaya Consulting nos gustan los retos, las nuevas ideas, la
              creatividad y el buen hacer por encima de todo.
            </p>
            <p>
              Tacubaya es Tranquilidad, es Aptitud, es Compromiso, es
              Unidad, es Brillantez, es Aprendizaje, y por supuesto... es
              Alegría.
            </p>
            <p>
              La Tranquilidad de nuestros clientes es sin duda nuestro
              primer lazo de unión. Es básico que confíen en
              nosotros y se sientan seguros.
            </p>
            <p>
              La Aptitud es la inteligencia y la habilidad con la que
              cumplimos con las necesidades que surgen en cada uno de los retos
              de comunicación a los que nos enfrentamos.
            </p>
            <p>
              El Compromiso en alcanzar las metas que nos exigen nuestros
              clientes es máximo. Enfocamos a la perfección cada trabajo y para
              lograr los hitos marcados.
            </p>
            <p>
              La Unidad del gran equipo de PERSONAS que conforma Tacubaya
              hace que consigamos los mejores resultados en cada proyecto
            </p>
            <p>
              La Brillantez es un talento que desarrollamos día a día en
              cada uno de nuestros trabajos, fruto tantos años de experiencia
              unido con la pasión por lo que amamos: LA PUBLICIDAD
            </p>
            <p>
              El Aprendizaje es un must have en cada uno de las
              experiencias vividas en el mundo publicitario.
            </p>
            <p>
              {/* <span className="space">__</span> */}
              Y, por supuesto…
            </p>
            <p>
              La Alegría de cada persona de venir cada día a desarrollar
              su talento y exprimir sus ideas para crear cosas bonitas y
              eficaces.
            </p>
            <p className="signature">Manuel Arce, socio fundador.</p>
          </div>
        </div>
        <div className="employees-container">
          {randomList.map((employee, i) => {
            return (
              <div key={i} className="employee-box">
                <img src={employee.image} alt={employee.name} />
                <h3 className={`fade-in-fwd ${employee.color}`}>
                  {employee.name}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="image-container-m  image-container-manifiesto" />
      </div>
    );
  }
}
