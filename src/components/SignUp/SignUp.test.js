import React from "react";
import ReactDOM from "react-dom";
import { mount, configure } from "enzyme";
import toJson from "enzyme-to-json";
import SignUp from "./SignUp";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe(`<SignUp />`, () => {
  //Smoke Testing
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SignUp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it("renders SignUp by default", () => {
    const output = mount(<SignUp />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
