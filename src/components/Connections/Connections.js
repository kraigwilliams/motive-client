import React, { Component } from 'react'
import ContentService from '../../services/content-service'
import{ ConnectionsPageWrapper, ConnectionsHeader, ConnectionsHeader2, ContentWrapper, Section } from './Connections.style';
import Button from '../Button/Button';
import { FormInput, FormWrapper, FormTitle } from '../Form/Form'

export default class Connections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      connections: [],
      filteredData: [],
    }
  }

  
  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.connections.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

//   getData = () => {
//     ContentService.getConnections()
//    .then(connections => {
//      const { query } = this.state;
//      const filteredData = connections.filter(element => {
//        return element.name.toLowerCase().includes(query.toLowerCase());
//      });
//        this.setState({ 
//          connections,
//          filteredData
//         });
//      })
//  }

//  componentDidMount() {
//    this.getData();
//  }
  
  render() {
    const { connections } = this.state;

    return(
     
      <ConnectionsPageWrapper>
          <ConnectionsHeader >
            Your Connections
          </ConnectionsHeader>
   
         <ContentWrapper>
          
          <FormWrapper>
            <FormTitle>
              Search all Motive users:
            </FormTitle>

            <FormInput onChange={this.handleInputChange} />
            
            <Button type='submit' >Search</Button>

            <FormTitle>
              Results:
              {this.state.filteredData}
            </FormTitle>
          </FormWrapper>

          <Section>
            {connections.map(friend => {
              return <ConnectionsHeader2>friend.name</ConnectionsHeader2>
            })}
            <ConnectionsHeader2>Friend 1 *</ConnectionsHeader2>
            <ConnectionsHeader2>Friend 2 *</ConnectionsHeader2>
          </Section>
        </ContentWrapper>
        
    </ConnectionsPageWrapper >
   
    )
  }
}

