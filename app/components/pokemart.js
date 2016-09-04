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

var pokeball = require('../images/pokeball.png')
var greatball = require('../images/greatball.png')
var loveball = require('../images/loveball.png')
var ultraball = require('../images/ultraball.png')
var timereball = require('../images/timerball.png')
var diveball = require('../images/diveball.png')
var sportball = require('../images/sportball.png')
var safariball = require('../images/safariball.png')
var quickball = require('../images/quickball.png')

var items = [{
  name: "Pokeball",
  cost:10,
  desc: "The most basic of Pokeballs. The standard Pokeball is the easiest to acquire and cheapest to purchase. Standard Pokeballs are most effective at capturing common Pokemon. "
},{
  name: "Great Ball",
  cost:40,
  desc: " A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball can."
},
{
  name: "Love Ball",
  cost:30,
  desc: "A Poké Ball that works best when catching a Pokémon that is of the opposite gender of your Pokémon."
},
{
  name: "Sport Ball",
  cost:30,
  desc: "A special Poké Ball that is used during the Bug-Catching Contest."
},
{
  name: "Safari Ball",
  cost:30,
  desc: "A special Poké Ball that is used only in the Great Marsh. It is recognizable by the camouflage pattern decorating it."
},
{
  name: "Timer Ball",
  cost:30,
  desc: "A somewhat different Poké Ball that becomes progressively more effective the more turns that are taken in battle."
},
{
  name: "Dive Ball",
  cost:35,
  desc: "A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater."
},
{
  name: "Quick Ball",
  cost:35,
  desc: "A somewhat different Poké Ball that has a more successful catch rate if used at the start of a wild encounter."
},
{
{
  name: "Ultra Ball",
  cost:80,
  desc: "An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball."
}]

export default class Pokemart extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<View style={{backgroundColor:'#e9e9e9', flex:1}}>
  		<Nav name="POKEMART" />
      <View style={{height:50,flexDirection:'row', margin:10, alignItems:'center', marginBottom:0, backgroundColor:'#e9e9e9', borderBottomWidth:2, borderColor:'#d3d2d3', justifyContent:'space-around', borderRadius:5}}>
      <Text style={{color:"#de737b", fontWeight:'600', fontSize:12}}>POKE BALLS</Text>
      <Text style={{color:"#b3b6b3", fontWeight:'600', fontSize:12}}>CONSUMABLE</Text>
      <Text style={{color:"#b3b6b3", fontWeight:'600', fontSize:12}}>EQUIPMENT</Text>
      </View>
      <View></View>
  		</View>)
  }
}