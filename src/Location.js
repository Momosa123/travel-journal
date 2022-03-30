import React from "react";
// import img from "./alessio-rinella-T0aBQz7U_eA-unsplash.jpg";

export default function Location(props) {
  return (
    <div className="container">
      <div className="image-container">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="text-container">
        <div className="location-container">
          <h3 className="location">
            <i className="fas fa-map-pin"></i>
            {props.location}
          </h3>
          <a target="_blank" rel="noreferrer" href={props.maps}>
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.title}</h2>
        <p className="date">
          {props.startDate}-{props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
