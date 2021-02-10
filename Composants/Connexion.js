import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Linking, Image, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Fire from "../firebaseAPI.js"
import firebase from 'firebase'
import { connect } from 'react-redux'





class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.login()
  }


  state ={
    mail:"",
    password:""
  }

  handleMail = (text) => {
    this.setState({mail: text})
  }

  handlePassword = (text) => {
    this.setState({password: text})
  }

  login(mail, pass) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
          firebase.auth().signInWithEmailAndPassword(mail, pass).then(
            (this.props.navigation.navigate('Accueil'))
          )
      })
   }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.wrapper}>
            <Image
            style={styles.logo}
            source={require('../Media/Logo.png')} />
          </View>
          <View style={styles.wrapper1}>
            <Text style={styles.text}>Adresse mail :</Text>
            <TextInput style={styles.inputText}
            autoCapitalize = "none"
            onChangeText = {this.handleMail}/>
              <Text style={styles.text}>Mot de passe :</Text>
              <TextInput style={styles.inputText}
              autoCapitalize = "none"
              onChangeText = {this.handlePassword}
              secureTextEntry={true}/>
          </View>
          <View style={styles.wrapper2}>
          <TouchableOpacity style={styles.buttonSecondary} title='Inscription'
          onPress={() => this.props.navigation.navigate('Inscription')}
          >
            <Text style={styles.textSecondary}>Inscription</Text>
          </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonPrimary}
            title='Connexion'
            onPress = {() => Fire.checkAuth(this.state.mail, this.state.password)}>
              <Text style={styles.textPrimary}>Connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : '#373c78',
    justifyContent:'center',
    alignItems:'center',
  },
  innerContainer:{
    height:400,
    width:'75%',
    backgroundColor:'#00164c',
    justifyContent:'center',
    borderRadius:3,
  },
  wrapper:{
    height:130,
    alignItems:'center',
  },
  wrapper1:{
    height:160,
    paddingTop:'5%',
  },
  wrapper2:{
    paddingTop:15,
    flexDirection:'row',
    justifyContent:'space-around',
    flex:1,
  },
  logo:{
    resizeMode:'contain',
    width:170,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  text:{
    color:'white',
    paddingLeft:30,
    fontSize:16,
  },
  inputText:{
    height:32,
    width:'80%',
    borderColor: 'gray',
    color:'white',
    borderWidth: 1,
    backgroundColor:'#373c78',
    padding:0,
    alignSelf:'center',
    borderRadius:10,
    fontSize:16,
  },
  buttonPrimary:{
    width:100,
    height:48,
    backgroundColor:'#ff6b5a',
    color:'red',
    borderRadius:10,
    //paddingRight:'20%',
  },
  textPrimary:{
    display:'flex',
    color:'white',
    fontWeight:'bold',
    fontSize:15,
    flex:1,
    width:100,
    textAlign:'center',
    paddingTop:10,
    justifyContent:'center'
  },
  buttonSecondary:{
    width:100,
    height:48,
    paddingTop:5,
    fontSize:17,

  },
  textSecondary:{
    color:'#ff6b5a',
    fontWeight:'bold',
    fontSize:15,
    width:100,
    textAlign:'center',
    paddingTop:6,
  },
})


export default connect(mapStateToProps)(Connexion)
