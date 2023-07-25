// Admin/AddFreightRate.js
import React, { useState } from "react";

const AddFreightRate = () => {
  const [destination, setDestination] = useState("");
  const [rate, setRate] = useState("");

  const handleAddRate = (e) => {
    e.preventDefault();
    // Implement logic to add the freight rate to the data.
    const newRate = { destination, rate };
    // Save the newRate to the data.json file using axios or any other method.
    console.log("New Freight Rate:", newRate);
    setDestination("");
    setRate("");
  };

  return (
    <div>
      <h3>Add Freight Rate</h3>
      <form onSubmit={handleAddRate}>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination"
        />
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Rate"
        />
        <button type="submit">Add Rate</button>
      </form>
    </div>
  );
};

export default AddFreightRate;
