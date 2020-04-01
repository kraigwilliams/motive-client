import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import ActionsService from '../../services/actions-service'
import{ ConnectionsPageWrapper, ConnectionsHeader, FriendsName, FriendsUserName, FriendsHeader, ConnectionsSection } from './Connections.style';
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
      nonconnections: [],
      filteredData: [],
    }
  }

  
  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.nonconnections.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData
      };
    });
  };

  async getData(){
    const { user } = this.context;
    const userId = user.id;
    const connections = await ActionsService.getConnections(userId)
    if(connections) {
      this.setState({
        connections
      })
    }
    
    const nonconnections = await ActionsService.getAllNonconnections()
    if (nonconnections) {
      this.setState({
        nonconnections
      })
      const { query } = this.state;
   
      const filteredData = nonconnections.filter(element => {
       return element.name.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({ 
        filteredData
      });
    }  
 }

 componentDidMount() {
   this.getData();
 }
  
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
            
            {/* <FormButton 
              type='submit' 
              margintop={'15px'} 
              backgroundcolor={colors.darkergrey} 
              color={colors.offwhite}
            >
              Search
            </FormButton> */}

            <FormTitle color={colors.offwhite}>
              {/* this will eventually be getting the data for search friends from DB */}
              {filteredData.map((connection, idx) => {
              return <Connection 
                firstname={connection.first_name} 
                lastname={connection.last_name}
                username={connection.username}
                id={connection.id}
              /> 
              })}

              {/* 
              <Connection /> 
              <Connection /> 
              <Connection />  
              */}
            </FormTitle>
          </FormWrapper>

          <ConnectionsSection>
            <FriendsHeader> Friends </FriendsHeader>
            {/* map through connections ins tate to render each connection detail */}
              {connections.map(friend => {
                return (
                  <>
                    <FriendsName>friend.first_name frined.last_name</FriendsName>
                    <FriendsUserName>friend.username</FriendsUserName>
                  </>
                )
              })}

            {/* hard coded for now */}
            {/* <FriendsName>Jordan Castillo</FriendsName>
            <FriendsUserName>jordanxcast</FriendsUserName>
            <FriendsName>Scott Lingner</FriendsName>
            <FriendsUserName>slingner</FriendsUserName>
            <FriendsName>Kraig Williams</FriendsName>
            <FriendsUserName>kwill</FriendsUserName> */}
      
        </ConnectionsSection>
      


        
    </ConnectionsPageWrapper >
   
    )
  }
}

