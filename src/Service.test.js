import GetWaterTemperature from "./Service.js";
import axios from "axios";

jest.mock("axios");

beforeEach(() => {
  axios.mockClear();
});

describe("get ambient temperature", () => {
  it("should get water temperature", async () => {
    const temperature = {temperature: 10};
    const response = {data: temperature};
    axios.get.mockResolvedValue(response);
    var responseReceived = await GetWaterTemperature();
    expect(responseReceived.temperature).toEqual(10);
  });
});
