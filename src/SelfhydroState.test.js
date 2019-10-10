import React from "react";

import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, wait} from "@testing-library/react";

import SelfhydroState from "./SelfhydroState.js";
import GetWaterTemperature from "./Service.js";

jest.mock("./Service.js");

it("should display water temperture", async done => {
  GetWaterTemperature.mockImplementation(() => Promise.resolve(12));

  const {getByDisplayValue} = render(<SelfhydroState />);
  setImmediate(done);
  await wait(() => getByDisplayValue("12"));
  const temperatureValie = expect(getByDisplayValue("12")).toBe(12);
});
