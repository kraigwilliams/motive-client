import React from 'react'
import { mount, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignUp from './SignUp'
import Adapter from 'enzyme-adapter-react-16';



configure({adapter: new Adapter()});
describe(`<SignUp />`, () => {
  //Snapshot Testing
  it('renders SignUp by default', () => {
    const output = mount(
      <SignUp />
    )
    expect(toJson(output)).toMatchSnapshot()
  })
})