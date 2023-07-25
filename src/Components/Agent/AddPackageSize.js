// Agent/AddPackageSize.js
import React, { useState } from "react";

const AddPackageSize = () => {
  const [size, setSize] = useState("");
  const [dimension, setDimension] = useState("");

  const handleAddSize = (e) => {
    e.preventDefault();
    // Implement logic to add the package size to the data.
    const newSize = { size, dimension };
    // Save the newSize to the data.json file using axios or any other method.
    console.log("New Package Size:", newSize);
    setSize("");
    setDimension("");
  };

  return (
    <div>
      <h3>Add Package Size</h3>
      <form onSubmit={handleAddSize}>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="Size"
        />
        <input
          type="text"
          value={dimension}
          onChange={(e) => setDimension(e.target.value)}
          placeholder="Dimension"
        />
        <button type="submit">Add Size</button>
      </form>
    </div>
  );
};

export default AddPackageSize;
