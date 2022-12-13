import React from "react";
// import ReactDOM from "react-dom";
import Card from "./Card";
import data from "../data";

function Journal() {
  const card = data.map((element) => 
    <Card
      key={element.imageUrl}
      title={element.title}
      location={element.location}
      googleMapsUrl={element.googleMapsUrl}
      startDate={element.startDate}
      endDate={element.endDate}
      description={element.description}
      imageUrl={element.imageUrl}
    />
  );
  return(
    <div className="journal-container">{card}</div>
  );
}

export default Journal;
