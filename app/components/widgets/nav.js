import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<View style={{height:55, backgroundColor:'#de737b', alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
      <Icon name="clear-all" size={30} color="#fff" style={{margin:10}} />
      <Text style={{color:'#fff', fontWeight:'600'}}>{this.props.name}</Text>
      <Icon name="search" size={25} color="#fff" style={{margin:10}} />
  		</View>
  		)
  }
}