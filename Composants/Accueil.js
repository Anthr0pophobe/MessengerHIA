import React from 'react';
import {View, StyleSheet, Image, FlatList, Text, Button, UseState} from 'react-native';
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

lecture = () => {
  console.log(this.notif);
}

// componentDidMount(){
//   var user =  firebase.auth().currentUser;
//   var uid = user.uid
//    var db = firebase.firestore();
//    var query = db.collection("notification") 
//    console.log('query',query);
//    query.get()
//         .then((querySnapshot)=> {
//           querySnapshot.forEach((doc) => {
//           this.notif = doc.data();
//           this.setState({ notif: this.notif })
//         })
//       })
//
//         .catch((error)=> {
//           console.log("erreur dans la reception du document", error);
//         })
// }

componentDidMount(){
  var user =  firebase.auth().currentUser;
  var uid = user.uid
   var db = firebase.firestore();
   var query = db.collection("notification")
   console.log('query',query);
   query.get()
        .then((querySnapshot)=> {
          querySnapshot.forEach((doc) => {
          this.notif = doc.data();
          this.setState({ notif: this.notif })
        })
      })

        .catch((error)=> {
          console.log("erreur dans la reception du document", error);
        })
}




  render() {
    const { notif } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image
          style={styles.logo}
          source={require('../Media/Logo.png')}/>
          <Button
          onPress={this.lecture}/>

          <FlatList
          keyExtractor={(item) => item.uid.toString()}
          keyExtractor={({ id }, index) => this.state.notif}
          renderItem={({extraData}) => <NotifItem extraData={this.state.notif}/>}

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
