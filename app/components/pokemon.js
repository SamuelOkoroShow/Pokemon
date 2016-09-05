import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  ListView,
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
{
  name:"Bulbasaur",
  image: burb,
  selected: false
},
{ 
  name:'Alakazam',
  image: alakazam,
  selected: false
},
{
  name: "Mewtwo",
  image: mewtwo,
  selected: false
},
{
  name:'Gyarados',
  image: gyarados,
  selected: false
},
{
  name: "Charmeleon",
  image: charmeleon,
  selected: false
},
{
  name:"Charizard",
  image: charizard,
  selected: false
},
{
  name: "Squirtle",
  image: squirtle,
  selected: false
},
{
  name: "Warturtle",
  image: warturtle,
  selected: false
},
{
  name: "Caterpie",
  image: caterpie,
  selected: false
}
]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Pokemon extends Component {
  constructor(props){
    super(props)
    
     this.state = {
      dataSource: ds.cloneWithRows(currentPokemon)
    }
  }

  eachRow(val){
    return(<View style={{height:100, marginTop:10}}>
      <Image source ={val.image} style={{height:80, width:80, margin:10}} resizeMode ="contain" />
      </View>)
  }

  render(){
  	return(
  		<View style = {{flex:1, backgroundColor:'#f7f7f7'}}>
  		<Nav name ="POKEMON" />
      <PokeNav />
        <ListView 
      dataSource = {this.state.dataSource}
      contentContainerStyle ={{justifyContent: 'space-around', alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap'}}
      renderRow = {(rowData) => this.eachRow(rowData)}
      />
      <Footer />
  		</View>
  		)
  }
}