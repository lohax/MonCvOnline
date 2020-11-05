import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "../css/style.css";
import Bounce from 'react-reveal/Bounce';

export default class Skills extends Component {
  render() {

    const dataLan = ["Français : langue maternelle", "Anglais : Niveau intermédiaire (B1/B2)"];
    const dataDev = ["JavaScript ES6+", "React.js", "Vue.js", "Node.js", "JQuery", "HTML5", "CSS3", "PHP", "SQL", "Bootstrap", "DHTMLX", "Flexbox", "Joomla", "PWA", "JAMstack", "Gatsby", "Contentful", "Netlify", "Webpack", "Parcel"]
    const dataLog = ["Visual studio code", "Photoshop", "Office Suite", "SQLManager"]

    return (
      <Bounce top cascade>
        <div className="service section  moving animated animatedFadeIn fadeInUp" id="Skills">
          <div className="container">
            <div className="section-head">
              <h2>Compétences</h2>
            </div>
            <div className="row">

              <div className="col-md-4 mb-3">
                <div className="service-main">
                  <div className="lang cmptc"><h3>Langues</h3></div>
                  <div className="innercmptc">

                    {dataLan.map((item, index) => {
                      return (
                        <Bounce top cascade>
                          <Button variant="outline-info" size="sm" className="btncmptc">{item}</Button>
                        </Bounce>

                      );
                    })}

                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="service-main ">
                  <div className="devlang cmptc"><h3>Developpement</h3></div>
                  <div className="innercmptc">

                    {dataDev.map((item, index) => {
                      return (
                        <Bounce top cascade>
                          <Button variant="outline-danger" size="sm" className="btncmptc">{item}</Button>

                        </Bounce>
                      );
                    })}

                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="service-main">
                  <div className="logi cmptc"><h3>Logiciels</h3></div>
                  <div className="innercmptc">

                    {dataLog.map((item, index) => {
                      return (
                        <Bounce top cascade>
                          <Button variant="outline-success" size="sm" className="btncmptc">{item}</Button>
                        </Bounce>
                      );
                    })}

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Bounce>
    );
  }
}
