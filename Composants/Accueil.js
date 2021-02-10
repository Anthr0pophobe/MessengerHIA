import React from 'react';
import {View, StyleSheet, Image, FlatList, Text} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Connexion from './Connexion.js'
import NotifItem from './NotifItem.js'

class Accueil extends React.Component{

  constructor(props) {
    super(props);
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
          style={styles.logo}
          source={require('../Media/Logo.png')}/>
          <FlatList
         data={[{key: 'a'}, {key: 'b'}]}
         renderItem={({item}) => <NotifItem/>}
       />
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
    alignItems:'center'
  },
  innerContainer:{
    width:"95%",
    height:"97%",
    backgroundColor:'#00164c',
    alignItems:'center',
    borderRadius:3,

  },
  logo:{
      resizeMode:'contain',
      width:100,
      height:100,
  },
})

export default Accueil;
