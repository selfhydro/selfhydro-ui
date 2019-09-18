import GetAmbientTemperature from "./Service.js";
import axios from "axios";

jest.mock("axios");

it("should get ambient temperature", async () => {
  const temperature = {temperature: 10};
  const response = {data: temperature};
  axios.get.mockResolvedValue(response);
  var responseReceived = await GetAmbientTemperature();
  expect(responseReceived.temperature).toEqual(10);
});
