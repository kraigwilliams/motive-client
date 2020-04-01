import React from 'react'
import ReactDOM from 'react-dom'
import AddTopic from './AddTopic'
import renderer from 'react-test-renderer';
    
describe(`<AddTopic />`, () => {
  //Smoke Testing 
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <AddTopic />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
  //Snapshot Testing
  it('renders UI as expected', () => {
    const tree = renderer 
      .create(<AddTopic />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})