import React from "react";

function Card(props) {
  return (
    <div className="Card_container">
      <img className="card-img" src={props.imageUrl} alt={props.location} />
      <div className="card-content">
        <div className="card-locationMap">
          <div className="card-pathSymbol">
            <img src="./images/Path.png" alt="point" />
          </div>
          <div className="card-location">{props.location}</div>
          <div className="card-mapLink">
            <a href={props.googleMapsUrl}  rel="noopener noreferrer" target="_blank">View on Google Maps</a>
          </div>
        </div>

        <div className="card-title">{props.title}</div>
        <div className="card-date">
          <span>
            {props.startDate}-{props.endDate}
          </span>
        </div>

        <div className="card-desc">{props.description}</div>
      </div>
    </div>
  );
}

export default Card;
