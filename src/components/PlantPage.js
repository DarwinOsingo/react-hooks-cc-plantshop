import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants }) {
  const [searchQuery, setSearchQuery] = useState(""); // State for managing search query

  // Function to handle search input change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filtered plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to add a new plant (post to API and update state)
  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((addedPlant) => {
        // Update the state with the newly added plant
        plants.push(addedPlant); // This directly modifies the array (would be better to use setPlants for functional update)
      })
      .catch((error) => console.error("Error adding plant:", error));
  };

  return (
    <main>
      {/* New Plant Form */}
      <NewPlantForm addPlant={addPlant} /> {/* Pass addPlant to NewPlantForm */}
      
      {/* Search */}
      <Search onSearch={handleSearch} /> {/* Pass handleSearch to Search */}
      
      {/* Display filtered plants */}
      <PlantList plants={filteredPlants} /> {/* Pass filtered plants to PlantList */}
    </main>
  );
}

export default PlantPage;
