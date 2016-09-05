import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  ScrollView,
  View
} from 'react-native';
import Footer from "./widgets/pokeballFoot"
import Icon from 'react-native-vector-icons/MaterialIcons';

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

// this is what each passed property should look like
var pokemon = {
  image: blast,
  name: "BLASTOISE",
  number: "009",
  'type': "Water",
  'image': blast,
  'color': '#0084c1',
  'seen': 3,
  desc: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet",
  caught:3

}
export default class EachPokeDex extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<Image source={require('../images/waterBack.jpg')} style={{flex:1, width:null, height:null, }}>
      <View style={{height:55, flexDirection:'row', justifyContent:'space-between', backgroundColor:"rgba(0,0,0,0.3)", alignItems:'center'}}>
      <TouchableOpacity onPress = {() => this.props.navigator.pop()}>
      <Icon name="navigate-before" color="#fff" size={30} />
      </TouchableOpacity>
      <View />
      <TouchableOpacity onPress={() => this.props.navigator.replace({id:'trainer'})}>
      <Image source={require('../images/trainer.png')} resizeMode='contain' style={{width:30, height:30}} />
      </TouchableOpacity>
      </View>
      <View style={{flex:1, justifyContent:'flex-end'}}>
      </View>
  		<View style={{flex:2, backgroundColor:'rgba(255,255,255,0.9)'}}>
      <Image source ={pokemon.image} resizeMode="contain" style={{width:210, height: 240, alignSelf:'center', marginTop:-160}} />
      <View style={{flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:14, color:'#a6a6a6'}}>#{pokemon.number}  </Text>
      <Text style={{fontWeight:"600", color:'#777'}}>{pokemon.name}</Text>
      </View>
      <View style={styles.rectanglebit}>
      <View style={styles.columnbit}>
      <Text style={styles.title}>
      Type
      </Text>
      <Text style={styles.val}>
      {pokemon.type}
      </Text>
      </View>
       <View style={styles.columnbit}>
      <Text style={styles.title}>
      Seen
      </Text>
      <Text style={styles.val}>
      {pokemon.seen}
      </Text>
      </View>
       <View style={styles.columnbit}>
      <Text style={styles.title}>
      Caught
      </Text>
      <Text style={styles.val}>
      {pokemon.caught}
      </Text>
      </View>
      </View>
      <ScrollView contentContainerStyle={{margin:20, marginTop:5}}>
      <Text style={{color:'#999',lineHeight:22, fontWeight:'500', fontSize:14}}>
      {pokemon.desc}
      </Text>
      </ScrollView>
      <Footer />
      </View>
  		</Image>
  		)
  }
}


const styles = StyleSheet.create({
  rectanglebit:{height:56, borderWidth:2, flexDirection:'row', borderColor:'#e3e3e3', margin:20},
  columnbit:{flex:1, alignItems:'center', justifyContent:'space-around'},
  title:{ color:"#666", fontWeight:'600'},
  val:{ color:"#999"},
 
});