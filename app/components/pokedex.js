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

import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from './widgets/nav'

var bulbasaur = require('../images/001.png');
var ivysaur = require('../images/002.png');
var venusaur = require('../images/003.png');
var charmanda = require('../images/004.png');
var charmeleon = require('../images/005.png');
var charizard = require('../images/006.png');
var squirtle = require('../images/007.png');
var warturtle = require('../images/008.png');
var blast = require('../images/009.png');
var caterpie = require('../images/010.png');
// This is a dope link for pokedex data https://pokeapi.co/
const pokedexData = [
{
  "num": "001",
  "name": "BULBASAUR",
  'type': "poision",
  'image': bulbasaur,
  'color': '#a529ae'
},{
  "num": "002",
  "name": "IVYSAUR",
  'type': "poision",
  'image': ivysaur,
  'color': '#a529ae'
},{
  "num": "003",
  "name": "VENUSAUR",
  'type': "poision",
  'image': venusaur,
  'color': '#a529ae'
},{
  "num": "004",
  "name": "CHARMANDAR",
  'type': "fire",
  'image': charmanda,
  'color': '#bf4600'
},{
  "num": "005",
  "name": "CHARMELEON",
  'type': "fire",
  'image': charmeleon,
  'color': '#bf4600'
},{
  "num": "006",
  "name": "CHARIZARD",
  'type': "fire",
  'image': charizard,
  'color': '#bf4600'
},
{
  "num": "007",
  "name": "SQUIRTLE",
  'type': "water",
  'image': squirtle,
  'color': '#0084c1'
},
{
  "num": "008",
  "name": "WARETURTLE",
  'type': "water",
  'image': warturtle,
  'color': '#0084c1'
},{
  "num": "009",
  "name": "BLASTOISE",
  'type': "water",
  'image': blast,
  'color': '#0084c1'
},{
  "num": "010",
  "name": "CATERPIE",
  'type': "bug",
  'image': caterpie,
  'color': '#93ab3c'
},

]


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Pokedex extends Component {
  constructor(props){
    super(props)

      this.state = {
      dataSource: ds.cloneWithRows(pokedexData),
          }
 
  }
  balls(x){
    return(
      <View>
      <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center', margin:10}}>
      <Text style={{marginTop:55, color:'#d3d3d3'}}>#{x.num}  </Text>
      <Text style={{marginTop:55, color:'#555', fontWeight:'700', fontSize:13}}>{x.name}  </Text>
      <View style={{height:80, alignItems:'center', justifyContent:'center'}} >
       <View style={styles.line} />
      <Image source={require('../images/pokeOutline.png')} resizeMode="stretch" style={{marginTop:-6,height:50, width:50}} />
      </View>
      </View>
      </View>
      )
  }

  render(){
  	return(
  		<View style={{flex:1}}>
  		<Nav name="POKEDEX" />
      <ListView
      dataSource = {this.state.dataSource}
      renderRow = {(rowData) => this.balls(rowData)} />
  		</View>
  		)
  }
}

const styles = StyleSheet.create({
  line:{height:60, width:2, backgroundColor:'#e3e3e3' },
 
});