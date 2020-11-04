import React, { Component } from "react";
import Img from "gatsby-image";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class Banner extends Component {


  render() {
    const { data } = this.props;

    const hello = "<Hello world/>"

    const popoverHello = (
      <Popover id="popover-basic">
        <Popover.Content>
          <span className="welcomePopup"><strong>Bienvenue</strong> sur mon CV en ligne !</span>
        </Popover.Content>
      </Popover>
    );
    const popoverTwitter = (
      <Popover id="popover-basic">
        <Popover.Content>
          <>
            <b>Ooops!...</b>
            <br></br>
            <span>Je n'utilise pas twitter. Mais pour le design du site, c'est mieux avec des icones de réseaux...</span>
          </>
        </Popover.Content>
      </Popover>
    );

    const popoverFacebook = (
      <Popover id="popover-basic">
        <Popover.Content>
          <>
            <b>Ooops!...</b>
            <br></br>
            <span>Je n'utilise pas facebook professionnellement. Mais c'est encore une belle icone de plus.</span>
          </>
        </Popover.Content>
      </Popover>
    );

    const popoverInstagram = (
      <Popover id="popover-basic">
        <Popover.Content>
          <>
            <b>Ooops!...</b>
            <br></br>
            <span>Regardez ma présentation juste en dessous, vous comprendrez pourquoi je n'ai pas instagram...</span>
          </>
        </Popover.Content>
      </Popover>
    );


    return (
      <div className="banner">
        <Img
          fixed={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container" >
          <div className="banner-details ">
            <div>
              <OverlayTrigger placement="top" overlay={popoverHello} delay={{ show: 250, hide: 400 }}>
                <span className="hello" size="lg">{hello}</span>
              </OverlayTrigger>
            </div>
            <h1 className="moving animated animatedFadeIn fadeInUp">Je suis {data.designation}.</h1>
            <ul className="sub-data moving animated animatedFadeIn fadeInUp">
              {data.bannerList.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <ul className="social moving animated animatedFadeInUp fadeInUp">

              <li>
                <a
                  className="fab fa-linkedin-in"
                  href={data.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>

              <li>
                <a
                  className="fab fa-github"
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>

              <li>
                <OverlayTrigger  placement="bottom" overlay={popoverTwitter} delay={{ show: 250, hide: 400 }}>
                  <a
                    className="fab fa-twitter"
                    href="#"
                    target=""
                    rel=""
                  ></a>
                </OverlayTrigger>
              </li>

              <li>
                <OverlayTrigger  placement="top" overlay={popoverFacebook} delay={{ show: 250, hide: 400 }}>
                  <a
                    className="fab fa-facebook"
                    href="#"
                    target=""
                    rel=""
                  ></a>
                </OverlayTrigger>
              </li>

              <li>
                <OverlayTrigger  placement="bottom" overlay={popoverInstagram} delay={{ show: 250, hide: 400 }}>
                  <a
                    className="fab fa-instagram"
                    href="#"
                    target=""
                    rel=""
                  ></a>
                </OverlayTrigger>
              </li>

            </ul>
          </div>
        </div>
      </div>
    );
  }
}
