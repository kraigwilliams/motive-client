import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import CondensedTopic from './CondensedTopic'
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe(`<CondensedTopic />`, () => {
  //Snapshot Testing
  it('renders CondensedTopic by default', () => {
    const wrapper = shallow(
      <CondensedTopic />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})