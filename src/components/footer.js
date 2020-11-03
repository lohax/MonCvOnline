import React, { Component } from "react";
import Gatsby_Monogram from "../images/Gatsby_Monogram.svg"



export default class footer extends Component {
  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container footer">
          <span>Powered By <img height="18" width="20" src={Gatsby_Monogram} alt="gatsby" style={{ marginBottom: '0', margin: '0 0.25rem' }} /> <a href="https://www.gatsbyjs.com" target="new">Gatsby JS</a></span>
          <span>{(new Date().getFullYear())} <i className="far fa-copyright"></i> {this.props.siteName}</span>
        </div>
      </div>
    );
  }
}
