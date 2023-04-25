import React from "react";

function PlanetCard() {
  return (
    <div className="card">
      <h3>name</h3>
      <p>Author - </p>
      <p>Publish - </p>
      <div className="button-container">
        <button>Delete</button>
        <button>Update</button>
      </div>
    </div>
  );
}

export default PlanetCard;
