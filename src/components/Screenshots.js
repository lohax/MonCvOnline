import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { graphql } from "gatsby";


const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 2000,
  // nextArrow: <MyNextArrow />,
  // prevArrow: <MyPrevArrow />,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
};
// function MyNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <i
//       className="myArrow fas fa-chevron-circle-right"
//       style={{ ...style, display: "block", float: "right" }}
//       onClick={onClick}
//     ></i>
//   );
// }

// function MyPrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <i
//       className="myArrow fas fa-chevron-circle-left"
//       style={{ ...style, display: "block", float: "left", verticalAlign: "bottom !important" }}
//       onClick={onClick}
//     ></i>
//   );
// }
export default class Screenshots extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activePopup: false,
      selectedItem: 0
    };
  }
  render() {
    const { data } = this.props;
    const { activePopup, selectedItem } = this.state;

    console.log('data screen = ', data)
    // console.log('data.node = ', data.node)

    return (
      <Fragment>
        <div className="photos" id="Photos">
          <div className="container">
            <div className="slider-section photos-list">

              <Slider {...settings}>
                {data.screenShots.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="photos-item"
                      onClick={() => {
                        this.setState({
                          activePopup: true,
                          selectedItem: index
                        });
                      }}>
                      <Img
                        fixed={item.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        className='borderImg'
                      />
                    </div>

                  );
                })}
              </Slider>
              {activePopup ? (
                <div className="rg-popup">
                  <span
                    className="popup-layer"
                    onClick={() => {
                      this.setState({
                        activePopup: false
                      });
                    }}
                  ></span>

                  <div className="popup-inner">
                    <i
                      className="fas fa-times"
                      onClick={() => {
                        this.setState({
                          activePopup: false
                        });
                      }}
                    ></i>
                    <img
                      src={data.screenShots[selectedItem].file.url}
                      alt="popup-img"
                    />
                  </div>
                </div>
              ) : (
                  ""
                )}

            </div>
          </div>
        </div>

        <br />
      </Fragment>
    );
  }
}
export const pageQuery = graphql`
  query ScreenshotsPageQuery {
    contentfulWorks {
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
      }
    }
  }
`;
