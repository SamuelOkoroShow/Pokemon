import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';


export default class Login extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<Image source={require("../images/background.jpg")} resizeMode = "stretch" style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'space-between'}}>
  		<Image source={require('../images/logo.png')} resizeMode="contain" style={{width:220}} />
      <View style={{width:310, height:150, margin:10, }}>
      <Text style={{alignSelf:'flex-end', fontSize:13, margin:5, color:'#333', fontStyle:'italic', fontWeight:'200'}}>REGISTER</Text>
      <View style={{flex:1, borderColor:'#d3d3d3'}}>
      <TextInput 
      placeholder = "USERNAME"
      placeholderTextColor = "#fff"
      style = {styles.textInput}/>
      </View>
      <View style={{flex:1, borderColor:'#d3d3d3'}}>
      <TextInput 
      placeholder = "PASSWORD"
      placeholderTextColor = "#fff"
      style = {styles.textInput}/>
      </View>
      <TouchableOpacity style={{backgroundColor:'rgba(226,39,44, 0.6)', flex:1, justifyContent:'center', alignItems:'center'}}><Text style={{color:'#fff', fontSize:12, fontWeight:'700'}}>LOG IN</Text></TouchableOpacity>
      </View>
  		</Image>
  		)
  }
}
const styles = StyleSheet.create({
  textInput: {flex:1, backgroundColor:'#rgba(0,0,0,0.3)', padding:10, color:'#fff', fontSize:12},


});


