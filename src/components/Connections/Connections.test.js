import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Connections from "./Connections";
import Adapter from "enzyme-adapter-react-16";
import UserContext from "../../contexts/UserContext";

configure({ adapter: new Adapter() });
describe(`<Connections />`, () => {
  //Smoke Testing
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Connections />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it("renders Connections by default", () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Connections />
      </UserContext.Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
