import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import ContentService from '../../services/content-service'
import{ ConnectionsPageWrapper, ConnectionsHeader, ConnectionsHeader2, ContentWrapper, Section } from './Connections.style';
import { FormButton } from '../Button/Button';
import { FormInput, FormWrapper, FormTitle } from '../Form/Form'
import { colors } from '../constants'
export default class Connections extends Component {
  static contextType = UserContext;
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
          {this.context.user.username}'s Connections
          </ConnectionsHeader>
   
         <ContentWrapper>
          
          <FormWrapper backgroundColor={'none'}>
            <FormTitle color={colors.white}>
              Search all Motive users:
            </FormTitle>

            <FormInput 
              onChange={this.handleInputChange} 
              backgroundcolor={colors.offwhite}
              color={colors.white} 
            />
            
            <FormButton 
              type='submit' 
              margintop={'8px'} 
              backgroundcolor={colors.coral} 
              color={colors.white} 
            >
              Search
            </FormButton>

            <FormTitle color={colors.offwhite}>
              {this.state.filteredData}
              Friends listed here matching search.. with add button next to it triggering post to connection DB
            </FormTitle>
          </FormWrapper>

          <Section>
          <FormTitle color={colors.black}>Your Friends </FormTitle>
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

