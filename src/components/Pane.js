import React, { Component, Fragment } from 'react'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import Img from 'gatsby-image'
import Screenshots from './Screenshots'
import Button from 'react-bootstrap/Button'
import Bounce from 'react-reveal/Bounce'
import '../css/style.css'
import isMobile from 'react-device-detect'

class Pane extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isPaneOpen: false
    }
  }

  render () {
    const { item } = this.props

    return (
      <>

        <li className='item' onClick={() => this.setState({ isPaneOpen: true })}>
          <div className='inner'>
            <a href='/#Work' rel='noopener noreferrer'>
              <Img
                fixed={item.node.image.fluid}
                objectFit='cover'
                objectPosition='50% 50%'
              />
              <span className='name'>{item.node.siteName}</span>
            </a>
          </div>
        </li>

        <SlidingPane
          closeIcon={<div><i class='closeico far fa-window-close ' /></div>}
          isOpen={this.state.isPaneOpen}
          title={<h2 className='subtitleH2'>{item.node.siteName}</h2>}
          subtitle={<span>{item.node.shortdescription}</span>}
          width={isMobile || (typeof window !== 'undefined' && window.innerWidth < 568) ? '100%' : '70%'}
          onRequestClose={() => {
            this.setState({ isPaneOpen: false })
          }}
        >

          {
            item.node.screenShots !== null
              ? <div className='row'>
                <div className='col-md-12 mb-6'>
                  <div className='service-main smallpadding'>
                    <Screenshots data={item.node} />
                  </div>
                </div>
                </div>
              : ''
          }

          <div className='row'>

            <div className='col-md-8 mb-6'>
              <div className='service-main'>
                <div className='descr cmptc'><h3>Description</h3></div>
                <div className='innercmptc leftA'>

                  {item.node.sitedescription !== null ? <div dangerouslySetInnerHTML={{ __html: item.node.sitedescription.childMarkdownRemark.html }} /> : ''}

                </div>
              </div>
            </div>

            <div className='col-md-4 mb-6 '>
              <div className='service-main'>
                <div className='devlang cmptc'><h3><i className='fas fa-tools' /></h3></div>
                <div className='innercmptc'>

                  {
                    item.node.sitedescription !== null
                      ? item.node.usedSkills.map((item, index) => {
                          return (
                          <Bounce top cascade>
                            <Button variant='outline-danger' size='sm' className='btncmptc'>{item}</Button>
                          </Bounce>
                          )
                        })
                      : 'Les compétences utilisées seront détaillées prochainement'
                  }

                </div>
              </div>
            </div>

          </div>

          {
            item.node.url !== '#'
              ? <div className='row paneFooter'>
                <div className='col-md-12 mb-6'>
                  <div className='service-main'>
                    {item.node.url.includes('github') ? <i class='fab fa-github icolink' /> : <i class='fas fa-link icolink' />}  <a href={item.node.url} target='_blank'>{item.node.siteName}</a>
                  </div>
                </div>
                </div>
              : ''
          }

        </SlidingPane>

      </>
    )
  }
};

export default Pane
