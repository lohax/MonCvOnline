import React from "react";
import { Chrono } from "react-chrono";
import data from "../data/dataTimeline";
import "../css/style.css";

const Timeline = () => (

  <div className="timeline" id="Timeline">
    <div style={{ width: "100%", height: "130vh" }}>
      <Chrono
        items={data}
        mode="VERTICAL_ALTERNATING"
        cardHeight={650}
        theme={{ primary: "#343436", secondary: "#E36D0B" }}
      />
    </div>
  </div>

)

export default Timeline;

