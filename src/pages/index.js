import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import About from "../components/about";
import Skills from "../components/skills";
import Work from "../components/work";
import Contact from "../components/contact";
import Photos from "../components/photos";
import Timeline from"../components/Timeline"


const IndexPage = ({ data }) => (
  
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[`Loïc Chambost`, `Frontend Developer`, `Developer`]}
    />

    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter(item => item === "About")
      .map(t => {
        return <About data={data.contentfulAboutMe}></About>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Timeline")
      .map(t => {
        return <Timeline data={data.allContentfulTimeline}></Timeline>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Skills")
      .map(t => {
        return <Skills></Skills>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Work")
      .map(t => {
        return <Work data={data.allContentfulWorks}></Work>;
      })}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial data={data.allContentfulTestimonials}></Testimonial>
        );
      })} */}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Photos")
      .map(t => {
        return <Photos data={data.contentfulPhotos}></Photos>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact data={data.contentfulAboutMe.gmail}></Contact>;
      })}
  </Layout>
);

export default IndexPage;

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
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    allContentfulWorks {
      edges {
        node {
          siteName
          url
          image {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulPhotos {
      photos {
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    contentfulSiteInformation {
      menus
    },
  #   contentfulTimeline {
  #   id
  #   title
  #   contentTitle
  #   contentText {
  #     id
  #     contentText
  #   }
  #   contentDetailedText {
  #     id
  #     contentDetailedText
  #   }
  # }
  }
`;
