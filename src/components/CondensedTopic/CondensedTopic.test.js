import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import CondensedTopic from "./CondensedTopic";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe(`<CondensedTopic />`, () => {
  //Smoke Testing
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <CondensedTopic />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it("renders CondensedTopic by default", () => {
    const wrapper = shallow(
      <Router>
        <CondensedTopic />
      </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
