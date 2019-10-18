import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, wait} from "@testing-library/react";

import App from "./App";
import Authentication from "./Authentication.js";
import SelfhydroState from "./SelfhydroState.js";

jest.mock("./Authentication.js", () => () => <div />);
jest.mock("./SelfhydroState.js", () => () => <div />);

it("renders without crashing", async () => {
  const {getByDisplayValue} = render(<App />);
});
