import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const Connexion = () => {
  const [value, onChangeText, mdp] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
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
            <Button style={styles.button}>je suis un boutton</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : '#373c78',
    justifyContent:'center',
    alignItems:'center'
  },
  innerContainer:{
    height:'50%',
    width:'75%',
    backgroundColor:'#00164c',
    justifyContent:'center',

  },
  inputText:{
    height: 32,
    width:'80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor:'#373c78',
    padding:0,
    alignSelf:'center',
    borderRadius:'10px'
  },
  text:{
    color:'white',
    paddingLeft:30
  },
  button:{
    width:50,
    color:'black',
  }

})


export default Connexion;
