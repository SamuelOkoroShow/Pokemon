import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';
import Nav from './widgets/nav'


export default class Pokemart extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<View>
  		<Nav name="POKEMART" />
  		</View>
  		)
  }
}