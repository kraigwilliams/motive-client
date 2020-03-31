import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
// import ContentService from '../../services/content-service'
import{ ConnectionsPageWrapper, ConnectionsHeader, FriendsName, FriendsUserName, FriendsHeader, ContentWrapper, ConnectionsSection } from './Connections.style';
import { FormButton } from '../Button/Button';
import { FormInput, FormWrapper, FormTitle } from '../Form/Form'
import { colors } from '../constants'
import Connection from '../Connection/Connection'


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
    const { connections, filteredData } = this.state;

    return(
     
      <ConnectionsPageWrapper>
          <ConnectionsHeader >
          {this.context.user.username}'s Connections
          </ConnectionsHeader>
   
        
          
          <FormWrapper backgroundcolor='none'>
            <FormTitle color={colors.coral}>
              Add Connections
            </FormTitle>

            <FormInput 
              onChange={this.handleInputChange} 
              backgroundcolor={colors.darkergrey}
              color={colors.white} 
              placeholder='Search...'
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
              {/* this will eventually be getting the data for search friends from DB */}
              {/* {filteredData.map((connection, idx) => {
              return <Connection /> 
              })} */}
              <Connection /> 
              <Connection /> 
              <Connection /> 
            </FormTitle>
          </FormWrapper>

          <ConnectionsSection>
            <FriendsHeader> Friends </FriendsHeader>
              {connections.map(friend => {
                return (
                  <>
                    <FriendsName>friend.name</FriendsName>
                    <FriendsUserName>friend.username</FriendsUserName>
                  </>
                )
              })}
            <FriendsName>Jordan Castillo</FriendsName>
            <FriendsUserName>jordanxcast</FriendsUserName>
            <FriendsName>Scott Lingner</FriendsName>
            <FriendsUserName>slingner</FriendsUserName>
            <FriendsName>Kraig Williams</FriendsName>
            <FriendsUserName>kwill</FriendsUserName>
      
        </ConnectionsSection>
      


        
    </ConnectionsPageWrapper >
   
    )
  }
}

