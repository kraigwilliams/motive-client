import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Thought from './Thought';
import { ThoughtHeader, ThoughtTextarea, ThoughtDropdown, ThoughtWrapper } from './Thought.style'
import renderer from 'react-test-renderer';

describe(`<Thought />`, () => {
  it('renders UI as expected', () => {
    const tree = renderer 
      .create(<ThoughtHeader />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders UI as expected', () => {
    const tree = renderer 
      .create(<ThoughtTextarea />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders UI as expected', () => {
    const tree = renderer 
      .create(<ThoughtDropdown />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})