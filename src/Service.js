import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const GetWaterTemperature = async => {
  const temperatureURL = API_URL + "/api/waterTemperature";
  return axios.get(temperatureURL).then(
    response => {
      return response.data;
    },
    error => {
      console.log(error);
    }
  );
};

export default GetWaterTemperature;
