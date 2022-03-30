import React from "react";
import Location from "./Location";
import data from "./data";

export default function TravelApp() {
  const destinations = data.map((destination) => {
    return (
      <div>
        <Location key={destination.id} destination={destination} />
      </div>
    );
  });
  // const location = data[0]
  // return <Location
  // imageUrl={location.imageUrl} />;
  return (
    <div>
      <header className="header">
        <i className="fas fa-globe"></i>
        <h1 className="main-title">my travel journal</h1>
      </header>
      {destinations}
    </div>
  );
}
