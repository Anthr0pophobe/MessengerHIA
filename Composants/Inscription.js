import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase'



class Inscription extends React.Component {
  constructor(props) {
    super(props);
  }

  state ={
    name:"",
    lastName:"",
    mail:"",
    password:"",
    confirmPassword:""
  }

  handleName = (text) => {
    this.setState({name: text})
  }
  handleLastName = (text) => {
    this.setState({lastName: text})
  }
  handleMail = (text) => {
    this.setState({mail: text})
  }
  handlePassword = (text) => {
    this.setState({password: text})
  }
  handleConfirmPassword = (text) => {
    this.setState({confirmPassword: text})
  }
  verify = async () => {

    var db = firebase.firestore();
     const { name, lastName, mail, password, confirmPassword } = this.state
     var  uid;
    if(password === confirmPassword){
    await  firebase.auth().createUserWithEmailAndPassword(mail, password)
      var user = await firebase.auth().currentUser;

      if (user != null) {
        console.log(user)
        uid = user.uid
      }
      alert(uid)
      db
        .collection("cptProche").add({
        prenom:name,
        nom:lastName,
        mail:mail,
       uid:user.uid,
         })
      .then(() => this.props.navigation.navigate('Accueil'))
      }
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

          <Text style={styles.text}>Prenom :</Text>
          <TextInput
            style={styles.inputText}
            onChangeText = {this.handleName}
            />
            <Text style={styles.text}>Nom :</Text>
            <TextInput
              style={styles.inputText}
              onChangeText = {this.handleLastName}
              />
          <Text style={styles.text}>Adresse mail :</Text>
          <TextInput
            style={styles.inputText}
            onChangeText = {this.handleMail}
              />
          <Text style={styles.text}>Mot de passe :</Text>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            onChangeText = {this.handlePassword}
                />
          <Text style={styles.text}>Confirmer le mot de passe :</Text>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            onChangeText = {this.handleConfirmPassword}
          />
        </View>
        <View style={styles.wrapper2}>
        <TouchableOpacity style={styles.buttonSecondary} title='Connexion'
        onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.textSecondary}>Connexion</Text>
        </TouchableOpacity>
          <TouchableOpacity
          style={styles.buttonPrimary}
          title='Connexion'
          onPress={this.verify}
          >
            <Text style={styles.textPrimary}>Confirmer l'inscription</Text>
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
    height:600,
    width:'75%',
    backgroundColor:'#00164c',
    justifyContent:'center',
    borderRadius:3,
  },
  wrapper:{
    height:130,
    alignItems:'center',
    flex:1,
    paddingTop:20,
  },
  wrapper1:{
    height:160,
    paddingTop:'10%',
    flex:2
  },
  wrapper2:{
    paddingTop:50,
    flexDirection:'row',
    justifyContent:'space-around',
    height:150,
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
    paddingRight:'20%',
  },
  textPrimary:{
    display:'flex',
    color:'white',
    fontWeight:'bold',
    fontSize:15,
    flex:1,
    width:100,
    textAlign:'center',
    paddingTop:2,
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
    fontSize:14,
    width:100,
    textAlign:'center',
    paddingTop:6,
  },
})


export default Inscription;
