import React from 'react'
    import ReactDOM from 'react-dom'
    import AddThought from './AddThought'
    import renderer from 'react-test-renderer';
    
    describe(`<AddThought />`, () => {
      //Smoke Testing 
      it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
          <AddThought />,
          div
        )
        ReactDOM.unmountComponentAtNode(div)
      })
      //Snapshot Testing
      it('renders UI as expected', () => {
        const tree = renderer 
          .create(<AddThought />)
          .toJSON()
        expect(tree).toMatchSnapshot()
      })
    })

