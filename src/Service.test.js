import GetWaterTemperature from "./Service.js";
import axios from "axios";

jest.mock("axios");
process.env.REACT_APP_API_URL = "https://localhost";

beforeEach(() => {
  axios.mockClear();
});

describe("get ambient temperature", () => {
  it("should get water temperature", async () => {
    const response = {data: {temperature: 10}};
    axios.get.mockResolvedValue(response);
    var responseReceived = await GetWaterTemperature();
    expect(responseReceived.temperature).toEqual(10);
  });

  it("should get water temperature for a given system", async () => {
    await GetWaterTemperature("selfhydro");
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining("selfhydro")
    );
  });
});
