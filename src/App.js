import React, { useState, useEffect } from 'react';
import './App.css';
import SolarSystemButton from './components/SolarSystemButton';
import SolarSystemDetails from './components/SolarSystemDetails';

function App() {
  const [solarSystems, setSolarSystems] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/solarsystems')
      .then(response => response.json())
      .then(data => setSolarSystems(data));
  }, []);

  const handleSelectSystem = (id) => {
    const system = solarSystems.find(s => s.id === id);
    setSelectedSystem(system);
  };

  return (
    <div className="App">
      <h1>Solar Energy Systems</h1>
      <div className="solar-buttons">
        {solarSystems.map((system) => (
          <SolarSystemButton 
            key={system.id} 
            system={system} 
            onSelect={handleSelectSystem}
          />
        ))}
      </div>
      {selectedSystem && <SolarSystemDetails system={selectedSystem} />}
    </div>
  );
}

export default App;
