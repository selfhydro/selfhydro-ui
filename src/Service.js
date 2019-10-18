import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const GetWaterTemperature = async systemID => {
  const temperatureURL = API_URL + `/api/waterTemperature?systemid=${systemID}`;
  return axios.get(temperatureURL).then(
    response => {
      return response.data;
    },
    error => {}
  );
};

export default GetWaterTemperature;
