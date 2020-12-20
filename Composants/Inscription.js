import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Linking, Image, TouchableOpacity } from 'react-native';

const Inscription = () => {
  const [value, onChangeText, mdp] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.wrapper}>
          <Image
          style={styles.logo}
          source={require('../Media/Logo.png')} />
        </View>
        <View style={styles.wrapper1}>
          <Text style={styles.text}>Nom :</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
          <Text style={styles.text}>Prenom :</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
          <Text style={styles.text}>Adresse mail :</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={text => onChangeText(text)}
            value={value}
              />
          <Text style={styles.text}>Mot de passe :</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={mdp => onChangeText(mdp)}
            value={mdp}
                />
          <Text style={styles.text}>Confirmer le mot de passe :</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={mdp => onChangeText(mdp)}
            value={mdp}
          />
        </View>
        <View style={styles.wrapper2}>
        <TouchableOpacity style={styles.buttonSecondary} title='Connexion'>
          <Text style={styles.textSecondary}>Inscription</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrimary} title='Connexion'>
            <Text style={styles.textPrimary}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    color:'white',
    fontWeight:'bold',
    fontSize:15,
    flex:1,
    width:100,
    textAlign:'center',
    paddingTop:'25%'
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
