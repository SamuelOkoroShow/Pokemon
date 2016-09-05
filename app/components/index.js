import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Login from './login'
import EachPokemon from './eachPokemon'
import EachPokedex from './eachpokedex'
import Pokedex from './pokedex'
import Pokemon from './pokemon'
import Trainer from './trainer'
import Pokemart from './pokemart'
import Items from './items'




export default class Index extends Component {
  constructor(props){
    super(props)
 
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'login') {
      return (
        <Login
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'items') {
      return (
        <Items
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'pokemart') {
      return (
        <Pokemart
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'pokedex') {
      return (
        <Pokedex
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'pokemon') {
      return (
        <Pokemon
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'eachPokemon') {
      return (
        <EachPokemon
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'eachPokedex') {
      return (
        <EachPokedex
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'trainer') {
      return (
        <Trainer
        {...this.props} 
        navigator={navigator} />
        );
    }
  
   }


  render() {
    return (
      <View style={{flex:1}}>
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'login', name: 'login'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
