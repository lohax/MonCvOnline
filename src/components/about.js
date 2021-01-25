import React from 'react'
import Img from 'gatsby-image'
import { Button } from 'react-bootstrap'

import Reveal from 'react-reveal/Reveal'

const calculate_age = (bd) => {
  const today = new Date()
  let birthDate = new Date(bd)
  let age_now = today.getFullYear() - birthDate.getFullYear()
  let m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--
  }
  return age_now
}

const Header = ({ data }) => (

  <div className='about section' id='About'>

    <div className='container'>
      <div className='about-main row'>
        <div className='left col-md-5 col-lg-4 mb-3 '>

          <Reveal effect='animated animatedFadeIn fadeInLeft'>
            <Img
              fixed={data.photo.fluid}
              objectFit='cover'
              objectPosition='top center'
            />
          </Reveal>
        </div>

        <div className='left col-md-7 col-lg-8 '>
          <Reveal effect='animated animatedFadeIn fadeInRight'>
            <div className='about-details'>

              <span className='name'>Je m'appelle {data.name}.</span>
              <h2 className='sub-position'>
                Je suis {data.designation}.
              </h2>
              <div
                style={{ color: '#E36D0B', fontWeight: 'bold' }}
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
                }}

              />
              <div
                dangerouslySetInnerHTML={{
                  __html: data.moreDescription.childMarkdownRemark.html
                }}
              />
              <ul className='details'>
                <li>
                  <strong><i className='fa fa-user-tag' /></strong>
                  <p>{data.name}</p>
                </li>
                <li>
                  <strong><i className='fa fa-calendar-alt' /></strong>
                  <p>{calculate_age('1984-03-17')} ans</p>
                </li>
                <li>
                  <strong><i className='fa fa-map-marked-alt' /></strong>
                  <p>{data.location}</p>
                </li>
                <li>
                  <strong><i className='fa fa-envelope' /></strong>
                  <p>
                    <a href={`mailto:${data.gmail}`} name='maillink'>{data.gmail}</a>
                  </p>
                </li>
                <li>
                  <strong>CV</strong>
                  <p>
                    {/* <a href="//assets.ctfassets.net/fhp5aho9vq9w/6H3iameCFSUJyJmJ9o7Hjv/fed4d8b211331193fbca5b2b7e2ffb17/monCV.pdf"> */}
                    <a href={data.cv.file.url} name='cvlink'>
                      <Button variant='dark' name='buttoncvlink'>
                        <a href={data.cv.file.url} name='cvlink'>
                          <i className='fa fa-download' />
                        </a>
                      </Button>
                    </a>
                  </p>
                </li>

              </ul>
              <div className='socials'>
                <ul>
                  <li>
                    <a
                      className='fab fa-linkedin-in'
                      href={data.linkdin}
                      target='_blank'
                      rel='noopener noreferrer'
                      name='linkedinlink'
                    />
                  </li>
                  <li>
                    <a
                      className='fab fa-github'
                      href={data.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      name='githublink'
                    />
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  </div>
)

export default Header
