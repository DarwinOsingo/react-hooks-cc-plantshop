import React from "react";

function PlantCard({ plant }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={process.env.PUBLIC_URL + plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      {plant.inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

