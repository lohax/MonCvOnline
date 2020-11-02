import { Link } from "gatsby";
import React, { Component } from "react";

export default class Header extends Component {
  state = {
    menu: false
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                {data.logo.file.url ? (
                  <img src={data.logo.file.url} alt="logo" />
                ) : (
                    <span>{data.siteName}</span>
                  )}
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/#home">Accueil</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "About")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#About`}>Présentation</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Timeline")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Timeline`}>Parcours professionnel</Link>
                        </li>
                      );
                    })}
                  {/* {data.menus
                    .filter(item => item === "Testimonials")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Testimonials`}>Compétences</Link>
                        </li>
                      );
                    })} */}
                  {data.menus
                    .filter(item => item === "Service")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Service`}>Compétences</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Work")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Work`}>Portfolio</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Contact`}>Contact</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : (
                <div className="menu">
                  <ul
                    onClick={() => {
                      this.setState({
                        menu: false
                      });
                    }}
                  >
                    <li>
                      <Link to="/#home">Accueil</Link>
                    </li>

                    {data.menus
                      .filter(item => item === "Photos")
                      .map(t => {
                        return (
                          <li>
                            <Link to="/photos">Photos</Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
          </div>
        </div>
      </header>
    );
  }
}
