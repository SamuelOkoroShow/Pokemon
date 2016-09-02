import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


export default class Login extends Component {
  constructor(props){
    super(props)
 
  }
  render(){
  	return(
  		<Image source={require("../images/background.jpg")} resizeMode = "stretch" style={{flex:1, alignItems:'center', width:null, height:null, justifyContent:'space-between'}}>
  		<Image source={require('../images/logo.png')} resizeMode="contain" style={{width:220}} />
      <View style={{width:310, height:250, margin:10, }}>
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
      <View style={styles.row}>
      <View style={styles.line} /><View style={{flex:1, margin:5}}><Text style={{fontSize:10, fontWeight:'600', color:'#444'}}>OR CONNECT WITH</Text></View><View style = {styles.line} />
      </View>
      <View style={styles.row}>
      <TouchableOpacity
      style = {styles.social}
      >
      <Icon name = 'logo-facebook' color="#fff" style = {{margin:5}} />
      <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style = {styles.social}
      >
      <Icon name = 'logo-twitter' color="#fff" style = {{margin:5}} />
      <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style = {styles.social}
      >
      <Icon name = 'logo-googleplus' color="#fff" style = {{margin:5}} />
      <Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>google</Text>
      </TouchableOpacity>
      </View>
      </View>
  		</Image>
  		)
  }
}
const styles = StyleSheet.create({
  textInput: {flex:1, backgroundColor:'#rgba(0,0,0,0.3)', padding:10, color:'#fff', fontSize:12},
  line:{flex:1, height:2, backgroundColor:'rgba(0,0,0,0.2)' },
  row:{flex:1, flexDirection:'row', alignItems:'center'},
  social:{flex:1, backgroundColor:'#rgba(0,0,0,0.6)', flexDirection:'row', margin:8, alignItems:'center', justifyContent:'center', padding:5}

});


