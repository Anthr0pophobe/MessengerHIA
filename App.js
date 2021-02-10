import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Inscription from './Composants/Inscription.js'
import Connexion from './Composants/Connexion.js'
import Navigation from './Navigation/Navigation.js'


export default class App extends React.Component {
  render() {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  )
  }
}
