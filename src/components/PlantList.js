import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.length > 0 ? (
        plants.map((plant) => (
          <li key={plant.id}>
            <PlantCard plant={plant} />
          </li>
        ))
      ) : (
        <p>No plants found</p>
      )}
    </ul>
  );
}

export default PlantList;
