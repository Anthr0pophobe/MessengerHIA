import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const NotifItem = ({extraData}) => {
  const{nom, prenom, mail, uid} = extraData

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Nom : {extraData.nom}, prénom : {extraData.prenom}</Text>
    </View>
  )
}

// class NotifItem extends React.Component{
//   constructor(extraData){
//     super(extraData)
//   }
//
//   render(){
//     console.log(this.extraData);
//     return(
//
//     )}
//
// }

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
