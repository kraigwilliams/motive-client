import React from "react";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import { Comment, NoCommentsYet } from "./Comment";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe.only(`<Comment />`, () => {
  it("renders Comment without crashing", () => {
    shallow(<Comment />);
  });
  it("renders NoComment without crashing", () => {
    shallow(<NoCommentsYet />);
  });
  it("renders Comment UI as expected", () => {
    const tree = renderer.create(<Comment />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
