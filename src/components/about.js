import React from "react";
import Img from "gatsby-image";
import { Button } from 'react-bootstrap';


import Reveal from 'react-reveal/Reveal'

const calculate_age = (bd) => {
  var today = new Date();
  var birthDate = new Date(bd);
  var age_now = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return age_now;
}

const Header = ({ data }) => (

  

  <div className="about section" id="About">

{console.log(data)}
    <div className="container">
      <div className="about-main row">
        <div className="left col-md-5 col-lg-4 mb-3 ">

          <Reveal effect="animated animatedFadeIn fadeInLeft">
            <Img
              fixed={data.photo.fluid}
              objectFit="cover"
              objectPosition="top center"
            />
          </Reveal>
        </div>

        <div className="left col-md-7 col-lg-8 ">
          <Reveal effect="animated animatedFadeIn fadeInRight">
            <div className="about-details">

              <span className="name">Je m'appelle {data.name}.</span>
              <h2 className="sub-position">
                Je suis {data.designation}.
            </h2>
              <div style={{ color: '#E36D0B', fontWeight: 'bold' }}
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
                }}

              />
              <div
                dangerouslySetInnerHTML={{
                  __html: data.moreDescription.childMarkdownRemark.html
                }}
              />
              <ul className="details">
                <li>
                  <strong><i className="fa fa-user-tag"></i></strong>
                  <p>{data.name}</p>
                </li>
                <li>
                  <strong><i className="fa fa-calendar-alt"></i></strong>
                  <p>{calculate_age('1984-03-17')} ans</p>
                </li>
                <li>
                  <strong><i className="fa fa-map-marked-alt"></i></strong>
                  <p>{data.location}</p>
                </li>
                <li>
                  <strong><i className="fa fa-envelope"></i></strong>
                  <p>
                    <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
                  </p>
                </li>
                <li>
                  <strong>CV</strong>
                  <p>
                  {/* <a href="//assets.ctfassets.net/fhp5aho9vq9w/6H3iameCFSUJyJmJ9o7Hjv/fed4d8b211331193fbca5b2b7e2ffb17/monCV.pdf"> */}
                    <a href={data.cv.file.url}>
                      <Button variant="dark" >
                        <a href={data.cv.file.url}>
                          <i className="fa fa-download"></i>
                        </a>
                      </Button>
                    </a>
                  </p>
                </li>

              </ul>
              <div className="socials">
                <ul>
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
                </ul>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  </div>
);

export default Header;
