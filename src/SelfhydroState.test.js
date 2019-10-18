import React from "react";

import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, wait, cleanup} from "@testing-library/react";

import SelfhydroState from "./SelfhydroState.js";
import GetWaterTemperature from "./Service.js";

jest.mock("./Service.js");

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

it("should set water temperture", async () => {
  GetWaterTemperature.mockResolvedValue({temperature: 12});
  const {getByText} = render(<SelfhydroState />);
  await wait(() => getByText("12"));
  expect(getByText("12").innerHTML).toMatch(/12/);
});

// it("should display last time the state was updated", async done => {
//   await GetWaterTemperature.mockImplementation(() => Promise.resolve(12));
//   setImmediate(done);
//
//   const {getByDisplayValue} = render(<SelfhydroState />);
//   await wait(() => getByDisplayValue("Last Updated: "));
//   expect();
// });

it("should update temperature with new temperature when refreshed", async () => {
  GetWaterTemperature.mockResolvedValueOnce({temperature: 12});
  const {getByText} = render(<SelfhydroState />);
  await wait(() => getByText("12"));

  expect(getByText("12").innerHTML).toMatch(/12/);

  GetWaterTemperature.mockResolvedValue({temperature: 10});

  fireEvent.click(getByText("Refresh"));
  await wait(() => getByText("10"));
  expect(getByText("10").innerHTML).toMatch(/10/);
});
