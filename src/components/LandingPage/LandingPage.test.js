import React from "react";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import LandingPage from "./LandingPage";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe(`<LandingPage />`, () => {
  //Snapshot Testing
  it("renders LandingPage by default", () => {
    const wrapper = shallow(<LandingPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
