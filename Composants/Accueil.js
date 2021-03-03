import React from 'react';
import {View, StyleSheet, Image, FlatList, Text, Button} from 'react-native';
import Connexion from './Connexion.js'
import NotifItem from './NotifItem.js'
import Fire from "../firebaseAPI.js"
import firebase from 'firebase'
import 'firebase/firestore'

class Accueil extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      notif:[],

    }


}

test = () =>{
  var db = firebase.firestore();
    db.collection("cptProche").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
          style={styles.logo}
          source={require('../Media/Logo.png')}/>
          <Button
            onPress={this.test}
            title="ajouter DB"
          />
          <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
        //  keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <NotifItem notif={item}/>}
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
