import React from 'react';

function SolarSystemButton({ system, onSelect }) {
  return (
    <button onClick={() => onSelect(system.id)} className="solar-button">
      {system.type}
    </button>
  );
}

export default SolarSystemButton;
