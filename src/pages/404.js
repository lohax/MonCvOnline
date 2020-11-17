import React, { Component } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import notfound from "../images/notfound.gif";

import "../css/style.css";


export default class NotFoundPage extends Component {

  render() {

    return (
      <Layout>
        <SEO title="404: Not found" />
        <div className="notfound not-found-page">
          <div className="container text-center ">
            <h2>404 : NOT FOUND</h2>
            <h1>Ooops! Il n'y a rien ici...</h1>

            <div className="notfound">
              <img src={notfound} alt="404 : NOT FOUND" />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}