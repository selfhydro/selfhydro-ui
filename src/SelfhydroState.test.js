import React from "react";

import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, wait} from "@testing-library/react";

import SelfhydroState from "./SelfhydroState.js";
import GetAmbientTemperature from "./Service.js";

jest.mock("./Service.js");

it("should display temperture", async () => {
  GetAmbientTemperature.mockImplementation(() => Promise.resolve(12));

  const {getByDisplayValue} = render(<SelfhydroState />);

  await wait(() => getByDisplayValue("12"));
  const temperatureValie = expect(getByDisplayValue("12")).toBe(12);
});
