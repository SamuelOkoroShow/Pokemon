import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  Dimensions,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Pokeball extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  	<View style={{position:"absolute", bottom:0, right:15, height:30, width:width-30, margin:5, backgroundColor:'rgba(255,255,255,0.1)', justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
      <TouchableOpacity>
      <Image source={require('../../images/pokeballicon.png')} resizeMode="contain" style={{height:35, width:35, margin:5, marginTop:-23}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('../../images/close.png')} resizeMode="contain" style={{height:35, width:35, margin:5, marginTop:-23}} />
      </TouchableOpacity>
      </View>
  		)
  }
}