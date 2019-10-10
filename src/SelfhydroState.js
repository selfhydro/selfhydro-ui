import React, {useState, useEffect} from "react";
import GetWaterTemperature from "./Service.js";

function SelfhydroState() {
  const [waterTemperature, setWaterTemperature] = useState();

  useEffect(() => {
    GetWaterTemperature().then(temperatureResponse => {
      console.log(temperatureResponse);
      setWaterTemperature(temperatureResponse.temperature);
    });
  });

  return (
    <div>
      <p>Current Water Temperature</p>
      <span className="state">{waterTemperature}</span>
      <br />
      <button onClick={() => GetWaterTemperature()}>Refresh</button>
    </div>
  );
}

export default SelfhydroState;
