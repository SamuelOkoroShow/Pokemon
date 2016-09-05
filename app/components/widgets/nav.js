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
  
    this.state ={
      showNav: false
    }
  }

  showNav(){
    if(this.state.showNav){
    return(<View style={{backgroundColor:'#de737b', height:50, alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'pokedex'})}><Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>POKEDEX</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'pokemon'})}><Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>POKEMON</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'pokemart'})}><Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>POKEMART</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'items'})}><Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>ITEMS</Text></TouchableOpacity>
      </View>)}
  }

  navLogic(){
    if(this.state.showNav){
      this.setState({
        showNav: false
      })
    } else{
      this.setState({
        showNav: true
      })
    }
  }

  render(){
  	return(
      <View>
  		<View style={{height:55, backgroundColor:'#de737b', alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity onPress ={() => this.navLogic()}>
      <Icon name="clear-all" size={30} color="#fff" style={{margin:10}} />
      </TouchableOpacity>
      <Text style={{color:'#fff', fontWeight:'600'}}>{this.props.name}</Text>
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'trainer'})}>
      <Image source={require('../../images/trainer.png')} resizeMode='contain' style={{width:30, height:30}}/>
  		</TouchableOpacity>
      </View>
      {this.showNav()}
      </View>
  		)
  }
}