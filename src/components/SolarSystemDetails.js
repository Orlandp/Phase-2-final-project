import React from 'react';

function SolarSystemDetails({ system }) {
  return (
    <div className="solar-details">
      <h2>{system.type} Details</h2>
      <p><strong>Description:</strong> {system.description}</p>
      <p><strong>Price:</strong> ${system.price}</p>
      <h3>Features:</h3>
      <ul>
        {system.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default SolarSystemDetails;
