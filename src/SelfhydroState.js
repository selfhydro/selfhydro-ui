import React, {useState, useEffect} from "react";
import GetWaterTemperature from "./Service.js";

function SelfhydroState() {
  const [waterTemperature, setWaterTemperature] = useState();
  const [lastRefreshed, setLastRefreshed] = useState();

  useEffect(() => {
    updateWaterTemperature();
  });

  const updateWaterTemperature = () => {
    GetWaterTemperature("selfhydro-default").then(temperatureResponse => {
      setWaterTemperature(temperatureResponse.temperature);
    });
  };

  return (
    <div>
      <p>Current Water Temperature</p>
      <span className="state">{waterTemperature}</span>
      <span className="date">{lastRefreshed}</span>
      <br />
      <button onClick={() => updateWaterTemperature()}>Refresh</button>
    </div>
  );
}

export default SelfhydroState;
