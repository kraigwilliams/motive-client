import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Topic from './Topic'
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe(`renders <Topic />`, () => {
  //Snapshot Testing
  it('renders Topic by default', () => {
    const wrapper = shallow(
      <Topic />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})