import React from "react";
import { Chrono } from "react-chrono";
import data from "../data/dataTimeline";
import "../css/style.css";


export default function Timeline() {
  return (
    <div className="timeline" id="Timeline">
      <div style={{ width: "100%", height: "95vh" }}>
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          theme={{ primary: "#343436", secondary: "#E36D0B" }}
        />
      </div>
    </div>
  );
}

