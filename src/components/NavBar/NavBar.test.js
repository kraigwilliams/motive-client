import React from 'react';
import { shallow, mount, render } from 'enzyme';
// import MobileNavBar from './MobileNavBar'
import { NavWrapper } from './NavBar.style'
import renderer from 'react-test-renderer';
// import { ContentProvider } from './contexts/ContentContext'

describe(`<NavBar />`, () => {
  it('renders UI as expected', () => {
    const tree = renderer 
      .create(<NavWrapper />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})