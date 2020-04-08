import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import toJson from "enzyme-to-json";
import Dashboard from "./Dashboard";
import Adapter from "enzyme-adapter-react-16";
import UserContext from "../../contexts/UserContext";

configure({ adapter: new Adapter() });
describe(`<Dashboard />`, () => {
  //Smoke Testing
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <UserContext.Provider value={{ user: { username: "admin" } }}>
          <Dashboard />
        </UserContext.Provider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it("renders Dashboard by default", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Dashboard />
      </UserContext.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
