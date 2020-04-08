import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Connection from "./Connection";
import Adapter from "enzyme-adapter-react-16";
import UserContext from "../../contexts/UserContext";

configure({ adapter: new Adapter() });
describe(`<Connection />`, () => {
  //Smoke Testing
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Connection />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it("renders Connection by default", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Connection />
      </UserContext.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
