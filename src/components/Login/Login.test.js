import React from 'react'
import { mount, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Login from './Login'
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe(`<Login />`, () => {
  //Snapshot Testing
  it('renders Login by default', () => {
    const output = mount(
      <Login />
    )
    expect(toJson(output)).toMatchSnapshot()
  })
})