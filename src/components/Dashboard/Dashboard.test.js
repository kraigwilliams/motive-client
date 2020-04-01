import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Dashboard from './Dashboard'
import Adapter from 'enzyme-adapter-react-16';
import UserContext from '../../contexts/UserContext';


configure({adapter: new Adapter()});
describe(`<Dashboard />`, () => {
  //Snapshot Testing
  it('renders Dashboard by default', () => {
    const wrapper = shallow(
      <UserContext.Provider>
        <Dashboard />
      </UserContext.Provider>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})