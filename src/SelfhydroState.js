import React, {useState, useEffect} from "react";
import GetWaterTemperature from "./Service.js";

function SelfhydroState() {
  const [waterTemperature, setWaterTemperature] = useState();
  const [lastUpdated, setLastUpdated] = useState();

  useEffect(() => {
    updateWaterTemperature();
  });

  const updateWaterTemperature = () => {
    GetWaterTemperature("selfhydro-default").then(temperatureResponse => {
      setWaterTemperature(temperatureResponse.temperature);
      setLastUpdated(temperatureResponse.timestamp);
    });
  };

  return (
    <div>
      <p>Current State</p>
      <span className="state">Water Temperature: {waterTemperature}</span>
      <span className="date">Last Updated: {lastUpdated}</span>
      <br />
      <button onClick={() => updateWaterTemperature()}>Refresh</button>
    </div>
  );
}

export default SelfhydroState;
