import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "../css/style.css";

export default class service extends Component {
  render() {
    const { data } = this.props;

    console.info({ data })
    return (
      <div className="service section" id="Service">
        <div className="container">
          <div className="section-head">
            <h2>Compétences</h2>
          </div>
          <div className="row">
            {/* {data.edges.map((item, index) => {

              return (
                <div key={index} className="col-md-4 mb-3">
                  <div className="service-main">
                    <h3>{item.node.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />
                  </div>
                </div>
              );
            })} */}


            <div className="col-md-4 mb-3">
              <div className="service-main">
                <div className="lang cmptc"><h3>Langues</h3></div>
                <div className="innercmptc">
                  <Button variant="outline-info" size="sm" className="btncmptc">Français : langue maternelle</Button>
                  <Button variant="outline-info" size="sm" className="btncmptc">Anglais : Niveau intermédiaire (B1/B2)</Button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="service-main ">
                <div className="devlang cmptc"><h3>Developpement</h3></div>
                <div className="innercmptc">
                  <Button variant="outline-danger" size="sm" className="btncmptc">JavaScript ES6+</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">React.js</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">Vue.js</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">Node.js</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">JQuery</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">HTML5</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">CSS3</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">PHP</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">SQL</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">Bootstrap</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">DHTMLX</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">Flexbox</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">Joomla</Button>
                  <Button variant="outline-danger" size="sm" className="btncmptc">PWA</Button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="service-main">
                <div className="logi cmptc"><h3>Logiciels</h3></div>

                <div className="innercmptc">
                  <Button variant="outline-success" size="sm" className="btncmptc">Visual studio code</Button>
                  <Button variant="outline-success" size="sm" className="btncmptc">Photoshop</Button>
                  <Button variant="outline-success" size="sm" className="btncmptc">Office Suite</Button>
                  <Button variant="outline-success" size="sm" className="btncmptc">SQLManager</Button>
                </div>
              </div>
            </div>





          </div>
        </div>
      </div>
    );
  }
}
