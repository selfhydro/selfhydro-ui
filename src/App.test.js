import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, fireEvent, wait} from "@testing-library/react";

import App from "./App";
import Authentication from "./Authentication.js";

jest.mock("./Authentication.js", () => () => <div />);

it("renders without crashing", () => {
  // jest.doMock("./Authentication.js", () => {
  //   const Authentication = () => <div />;
  //   return Authentication;
  // });
  const {getByDisplayValue} = render(<App />);
});
