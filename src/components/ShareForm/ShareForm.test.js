import React from "react";
import ReactDOM from "react-dom";
import ShareForm from "./ShareForm";
import renderer from "react-test-renderer";

describe(`<ShareForm />`, () => {
  //Smoke Testing
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShareForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  //Snapshot Testing
  it("renders UI as expected", () => {
    const tree = renderer.create(<ShareForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
