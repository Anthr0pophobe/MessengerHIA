import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

class NotifItem extends React.Component{

  render(){
    console.log(this.props);
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Il a prit son bain à 8h du matin et ensuite il a manger ses pates. Fait le 10/2/2021 à 8h</Text>
      </View>
    )}

}

const styles = StyleSheet.create({
  container:{
    height: 50,
    width: "95%",
    marginLeft:'3%',
    backgroundColor : '#373c78',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    margin:5,
    padding:5
  },
  title:{
    width: "95%",
    color : 'white',
  }
})


export default NotifItem
