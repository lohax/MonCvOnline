import React, { Component, Fragment } from "react";
import Pane from "./Pane"

export default class work extends Component {


  render() {

    const { data } = this.props;

    return (
      <div className="work section" id="Work">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Portfolio</h2>
          </div>

          <ul className="work-list">

            {data.edges.map((item, index) => {

              console.info(data)

              return (
                <Fragment key={index}>

                  <Pane
                    item={item}
                    index={index}
                    state={this.state}
                  />

                </Fragment>
              );

            })}

          </ul>
        </div>

      </div>

    );
  }
}
