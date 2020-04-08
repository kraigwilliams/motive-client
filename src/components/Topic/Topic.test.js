import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Topic from "./Topic";
import Adapter from "enzyme-adapter-react-16";
import ContentContext from "./../../contexts/ContentContext";

configure({ adapter: new Adapter() });

describe(`renders <Topic />`, () => {
  //Smoke Testing
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Topic />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it("renders Topic by default", () => {
    const wrapper = shallow(
      <ContentContext.Provider>
        <Topic />
      </ContentContext.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
