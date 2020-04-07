import React from "react";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Topic from "./Topic";
import Adapter from "enzyme-adapter-react-16";
import ContentContext from "./../../contexts/ContentContext";

configure({ adapter: new Adapter() });

const match = {
  params: {
    id: 1,
  },
};
describe(`renders <Topic />`, () => {
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
