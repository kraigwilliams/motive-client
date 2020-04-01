import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme';
import {BrowserRouter} from 'react-router-dom'
// import MobileNavBar from './MobileNavBar'
import CondensedThought from './CondensedThought'
import renderer from 'react-test-renderer';

describe(`<CondensedThought />`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CondensedThought />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div)
    // const tree = renderer 
    //   .create(<CondensedThought />)
    //   .toJSON()
    // expect(tree).toMatchSnapshot()
  })
})