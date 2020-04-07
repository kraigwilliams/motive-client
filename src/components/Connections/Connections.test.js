import React from "react";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Connections from "./Connections";
import Adapter from "enzyme-adapter-react-16";
import UserContext from "../../contexts/UserContext";

configure({ adapter: new Adapter() });
describe(`<Connections />`, () => {
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
