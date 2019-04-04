import React from "react";
import { shallow } from "enzyme";
import HomePage from "../../src/views/HomePage";

const component = shallow(<HomePage />);

describe("HomePage", () => {
  it("should render homepage", () => {
    expect(component).toMatchSnapshot();
  });
});
