import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Nav from "./widgets/nav"
import PokeNav from "./widgets/pokemonNav"
import Footer from "./widgets/pokeballFoot"


var burb = require('../images/001.png');
var alakazam = require('../images/alakazam.png');
var mewtwo = require('../images/mewtwo.png');
var gyarados = require('../images/Gyarados.png');
var charmeleon = require('../images/005.png');
var charizard = require('../images/006.png');
var squirtle = require('../images/007.png');
var warturtle = require('../images/008.png');
var caterpie = require('../images/010.png');

currentPokemon = [
{},
{},
{},
{},
{},
{},
{},
{},
{}
]

export default class Pokemon extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<View style = {{flex:1, backgroundColor:'#f7f7f7'}}>
  		<Nav name ="POKEMON" />
      <PokeNav />
      <Footer />
  		</View>
  		)
  }
}