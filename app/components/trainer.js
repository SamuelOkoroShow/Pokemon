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

var burb = require('../images/001.png');
var alakazam = require('../images/alakazam.png');
var mewtwo = require('../images/mewtwo.png');
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from './widgets/nav'
import Footer from "./widgets/pokeballFoot"
import ItemsNav from './widgets/itemsNav'

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
]


var badge1 = require('../images/badge1U.png')
var badge2 = require('../images/badge2U.png')
var badge3 = require('../images/badge3U.png')
var badge4 = require('../images/badge4U.png')
var badge5 = require('../images/badge5A.png')
var badge6 = require('../images/badge6U.png')
var badge7 = require('../images/badge7U.png')
var badge8 = require('../images/badge8U.png')

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class Trainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      level: 24,
      dataSource: ds.cloneWithRows(currentPokemon)

    }
 
  }

  eachRow(val){
      var health = Math.floor((Math.random() * 90) + 1);
      var healthColor


      //custom health colors
      if (health < 20){
        healthColor = "#f96062"
      }else if(health > 19 && health < 40){
        healthColor = "#fbd34e"
      } else{
        healthColor = "#b7eb9b"
      }

    return(
      <TouchableOpacity>
      <View style={{height:120, margin:10}}>
      <Image source ={val.image} style={{height:80, width:80, margin:10}} resizeMode ="contain" />
      <View style={{flexDirection:'row', justifyContent:'space-around', borderBottomWidth:1, borderColor:'#e3e3e3', padding:5}}>
      <Text style={{fontSize:11, color:'#777'}}>CP</Text>
      <Text style={{fontSize:11, color:'#777'}}>{health}</Text>
      </View>
      <View style={{height:5, width:90, borderColor:'#c7c7c7', margin:3, borderWidth:1, borderRadius:5}}>
      <View style={{height:4, width:health, backgroundColor:healthColor, borderRadius:5}} />
      </View>
      </View>
      </ TouchableOpacity>
      )
  }

  render(){
  	return(
  		<View style={{flex:1}}>
      <Nav name="ACE TRAINER WENDY" {...this.props} />
      <View style={{flex:1}}>
      <View style={{flex:5, backgroundColor:'#ef8389', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
      <View style={{}}>
      <Image source = {require('../images/mystic.png')} resizeMode="contain" style={{height:30, width:30, margin:10, }} />
      <Text style={{color:'#fff', fontWeight:'600', fontSize:12}}>
      MYSTIC
      </Text>
      </View>
      <Image source = {require('../images/profile.png')} resizeMode="contain" style={{height:180, width:140}} />
      <View style={{flexDirection:'row', borderBottomWidth:2, borderColor:'#fff', borderRadius:5}}>
      <Text style={{color:'#fff', fontWeight:"700", fontSize:12, margin:8}}>
      LV    
      </Text>
      <Text style={{color:'#fff', fontWeight:"700", fontSize:21, margin:5}}>
      {this.state.level}
      </Text>
      </View>
      </View>
      <View style={{flex:3}}>
      <View style={{flexDirection:'row', justifyContent:'space-around', margin:10}}>
      <Image source={badge1} resizeMode="contain" style={{height:30, width:30, margin:10}} />
      <Image source={badge2} resizeMode="contain" style={{height:30, width:30, margin:10}} />
      <Image source={badge3} resizeMode="contain" style={{height:30, width:30, margin:10}} />
      <Image source={badge4} resizeMode="contain" style={{height:30, width:30, margin:10}} />
      <Image source={badge5} resizeMode="contain" style={{height:30, width:30, margin:10}} />
      <Image source={badge6} resizeMode="contain" style={{height:30, width:30, margin:10}} />
      <Image source={badge7} resizeMode="contain" style={{height:30, width:30, margin:10}} />
      <Image source={badge8} resizeMode="contain" style={{height:30, width:30, margin:10}} />
      </View>
      <View style={{alignItems:'center', justifyContent:'center', borderRadius:5, borderWidth:2, borderColor:'#e7e7e7', padding:15, margin:20}}>
      <Text style={{color:'#888', fontSize:12, fontWeight:'600'}}>CURRENT PARTY</Text>
      </View>
      </View>
      <ListView 
      dataSource = {this.state.dataSource}
      style = {{height:180}}
      contentContainerStyle ={{justifyContent: 'space-around', alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap'}}
      renderRow = {(rowData) => this.eachRow(rowData)}/>
      </View>
      <Footer />
  		</View>
  		)
  }
}