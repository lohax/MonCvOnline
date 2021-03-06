import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Banner from '../components/banner'
import About from '../components/about'
import Skills from '../components/skills'
import Work from '../components/work'
import Contact from '../components/contact'
import Timeline from '../components/Timeline'

const IndexPage = ({ data }) => (

  <Layout header='home'>
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={['Loïc Chambost', 'Frontend Developer', 'Developer']}
    />

    <Banner data={data.contentfulAboutMe} />

    {data.contentfulSiteInformation.menus
      .filter(item => item === 'About')
      .map(t => {
        return <About data={data.contentfulAboutMe} />
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === 'Timeline')
      .map(t => {
        return <Timeline data={data.allContentfulTimeline} />
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === 'Skills')
      .map(t => {
        return <Skills />
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === 'Work')
      .map(t => {
        return <Work data={data.allContentfulWorks} />
      })}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Photos")
      .map(t => {
        return <Photos data={data.contentfulPhotos}></Photos>;
      })}
 */}

    {data.contentfulSiteInformation.menus
      .filter(item => item === 'Contact')
      .map(t => {
        return <Contact data={data.contentfulAboutMe.gmail} />
      })}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      facebook
      github
      gmail
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      moreDescription {
        childMarkdownRemark {
          html
        }
      }
      cv {
        file {
          url
          fileName
          contentType
        }
      }
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      bannerList
    }
    allContentfulService(skip: 3, sort: {fields: id}) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    # allContentfulTestimonials {
    #   edges {
    #     node {
    #       name
    #       subTitle
    #       description {
    #         childMarkdownRemark {
    #           html
    #         }
    #       }
    #       avatarImage {
    #         fluid(maxWidth: 200) {
    #           base64
    #           aspectRatio
    #           src
    #           srcSet
    #           srcWebp
    #           srcSetWebp
    #           sizes
    #         }
    #       }
    #     }
    #   }
    # }
    allContentfulWorks(sort: {order: ASC, fields: order}, filter: {node_locale: {eq: "fr"}}) {

    edges {
      node {
        id
        siteName
        shortdescription
        url
        sitedescription {
          sitedescription
          childMarkdownRemark {
            html
          }
        }
        usedSkills
        order
        image {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
          description
        }
        screenShots {
            file {
            url
            fileName
            contentType
          }
          fluid(maxWidth: 600) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
          description
          
        }
      }
    }
  }

    # contentfulPhotos {
    #   photos {
    #     fluid(maxWidth: 600) {
    #       base64
    #       aspectRatio
    #       src
    #       srcSet
    #       srcWebp
    #       srcSetWebp
    #       sizes
    #     }
    #   }
    # }
    contentfulSiteInformation {
      menus
    }
  }
`
