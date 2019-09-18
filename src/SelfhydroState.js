import React, {useState, useEffect} from "react";
import GetAmbientTemperature from "./Service.js";
function SelfhydroState() {
  const [ambientTemperature, setAmbientTemperature] = useState();

  useEffect(() => {
    GetAmbientTemperature().then(temperatureResponse => {
      console.log(temperatureResponse);
      setAmbientTemperature(temperatureResponse.temperature);
    });
  });

  return (
    <div>
      <p>Current Ambient Temperature</p>
      <span className="state">{ambientTemperature}</span>
      <br />
      <button onClick={() => setAmbientTemperature(ambientTemperature + 1)}>
        Refresh
      </button>
    </div>
  );
}

export default SelfhydroState;
