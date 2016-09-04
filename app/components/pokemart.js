import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  ScrollView,
  ListView,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Nav from './widgets/nav'
import Footer from "./widgets/pokeballFoot"

var pokeball = require('../images/pokeball.png')
var greatball = require('../images/greatball.png')
var loveball = require('../images/loveball.png')
var ultraball = require('../images/ultraball.png')
var timerball = require('../images/timerball.png')
var diveball = require('../images/diveball.png')
var sportball = require('../images/sportball.png')
var safariball = require('../images/safariball.png')
var quickball = require('../images/quickball.png')

var trainer = {
  credits:950,
  items:{
    pokeballs:10,
    greatballs:5,
    ultraballs:0
  }
}

var items = [{
  name: "POKEBALL",
  cost:10,
  image: pokeball,
  desc: "The most basic of Pokeballs. The standard Pokeball is the easiest to acquire and cheapest to purchase. Standard Pokeballs are most effective at capturing common Pokemon. "
},{
  name: "GREAT BALL",
  cost:40,
  image: greatball,
  desc: " A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball can."
},
{
  name: "LOVE BALL",
  cost:30,
  image: loveball,
  desc: "A Poké Ball that works best when catching a Pokémon that is of the opposite gender of your Pokémon."
},
{
  name: "SPORT BALL",
  cost:30,
  image: sportball,
  desc: "A special Poké Ball that is used during the Bug-Catching Contest."
},
{
  name: "SAFARI BALL",
  cost:30,
  image: safariball,
  desc: "A special Poké Ball that is used only in the Great Marsh. It is recognizable by the camouflage pattern decorating it."
},
{
  name: "TIMER BALL",
  cost:30,
  image: timerball,
  desc: "A somewhat different Poké Ball that becomes progressively more effective the more turns that are taken in battle."
},
{
  name: "DIVE BALL",
  cost:35,
  image: diveball,
  desc: "A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater."
},
{
  name: "QUICK BALL",
  cost:35,
  image: quickball,
  desc: "A somewhat different Poké Ball that has a more successful catch rate if used at the start of a wild encounter."
},
{
  name: "ULTRA BALL",
  cost:80,
  image: ultraball,
  desc: "An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball."
}]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Pokemart extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(items)
    }
 
  }

  eachItem(x){
    return(
      <TouchableOpacity>
      <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#d3d3d3'}}>
      <View style={{alignItems:'center', justifyContent:'center', margin:15}}>
      <Image source={x.image} resizeMode='contain' style={{width:40, height:40}} />
      <View style={{flexDirection:'row', margin:5, alignItems:'center'}}>
            <Image source ={require('../images/currency.png')} resizeMode="contain" style={{height:10, width:10, margin:5}} />
            <Text style={{color:'#888'}}>{x.cost}</Text>
      </View>
      </View>
      <View style={{justifyContent:'center', width:280, margin:10}}>
      <Text style={{fontWeight:'600', fontSize:13, color:'#666', marginBottom:7}}>{x.name}</Text>
      <Text style={{fontSize:12, color:'#777', fontWeight:'500', marginBottom:5, lineHeight:20}}>{x.desc}</Text>
      </View>
      </View>
      </TouchableOpacity>
      )
  }
  render(){
  	return(
  		<View style={{backgroundColor:'#f7f7f7', flex:1}}>
  		<Nav name="POKEMART" />
      <View style={{height:50,flexDirection:'row', margin:10, alignItems:'center', marginBottom:0, backgroundColor:'#f7f7f7', borderBottomWidth:2, borderColor:'#d3d2d3', justifyContent:'space-around', borderRadius:5}}>
      <Text style={{color:"#de737b", fontWeight:'600', fontSize:12}}>POKE BALLS</Text>
      <Text style={{color:"#b3b6b3", fontWeight:'600', fontSize:12}}>CONSUMABLE</Text>
      <Text style={{color:"#b3b6b3", fontWeight:'600', fontSize:12}}>EQUIPMENT</Text>
      </View>
      <ScrollView
      style = {{marginBottom:30}}
      >
      <View style={{flex:1, alignItems:'center', justifyContent:'flex-start', borderColor:'#d3d3d3', borderBottomWidth:1,}}>
      <View style={{flexDirection:"row",alignItems:'center', justifyContent:'center', margin:15}}>
      <Image source ={require('../images/currency.png')} resizeMode="contain" style={{height:50, width:50}} />
      <Text style={{color:'#888', fontSize:17, margin:5}}>{trainer.credits}</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:'center', justifyContent:'center', margin:5}}>
      <Image source ={require('../images/backpack.png')} resizeMode="contain" style={{height:25, width:25,}} />
      </View>
      <View style={{flexDirection:"row",alignItems:'center', justifyContent:'space-around', width:250}}>
      <Image source ={pokeball} resizeMode="contain" style={{height:15, width:15, margin:10}} />
      <Text style={{fontSize:11, fontWeight:'600', color:'#555'}}>{trainer.items.pokeballs}</Text>
      <Image source ={greatball} resizeMode="contain" style={{height:15, width:15, margin:10}} />
      <Text style={{fontSize:11, fontWeight:'600', color:'#555'}}>{trainer.items.greatballs}</Text>
      <Image source ={ultraball} resizeMode="contain" style={{height:15, width:15, margin:10}} />
      <Text style={{fontSize:11, fontWeight:'600', color:'#555'}}>{trainer.items.ultraballs}</Text>
      </View>
      </View>
      <ListView style={{flex:5,}} 
      scrollEnabled={false}
        contentContainerStyle ={{marginBottom:50}}

      dataSource = {this.state.dataSource}
      renderRow = {(rowData) => this.eachItem(rowData)}
      />
      </ScrollView>

      <Footer />
  		</View>)
  }





}