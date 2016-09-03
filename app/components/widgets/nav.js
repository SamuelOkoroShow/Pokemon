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
      <TouchableOpacity>
      <Icon name="clear-all" size={30} color="#fff" style={{margin:10}} />
      </TouchableOpacity>
      <Text style={{color:'#fff', fontWeight:'600'}}>{this.props.name}</Text>
      <TouchableOpacity>
      <Image source={require('../../images/trainer.png')} resizeMode='contain' style={{width:40, height:40}}/>
  		</TouchableOpacity>
      </View>
  		)
  }
}