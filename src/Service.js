import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const GetAmbientTemperature = async () => {
  const temperatureURL = API_URL + "/api/ambientTemperature";
  return axios.get(temperatureURL).then(response => {
    return response.data;
  });
};

export default GetAmbientTemperature;
