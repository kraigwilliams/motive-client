import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json'
import Thought from './Thought';
import { ThoughtHeader, ThoughtTextarea, ThoughtDropdown, ThoughtWrapper } from './Thought.style'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

const match = {
  params: {
    id: 1
  }
}

describe(`<Thought />`, () => {
  it('renders without crashing', () => {
    shallow(<Thought match={match}/>)
  })
  // it('renders Thought', () => {
  //   const wrapper = shallow(
  //     <Thought 
  //       required={true}
  //       match={{params: {id: 1}, path:'/thought/:id', url:'thought/1'}}
  //     />
  //   )
  //   // expect(toJson(wrapper)).toMatchSnapshot()
  //   expect(wrapper.containsMatchingElement(<Thought />)).toBeTruthy()

  // })
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