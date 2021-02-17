import React from 'react';
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Connexion from './Composants/Connexion.js'
import Accueil from './Composants/Accueil.js'


class Fire {
  constructor(props) {
    this.init()
    this.checkAuth()
  }

  init = () => {
    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey: "AIzaSyBWZS6Mn7yQt0OM3AMR2n3F0EGULY2PDZI",
        authDomain: "messengerhia2020.firebaseapp.com",
        databaseURL:"https://messengerhia2020-default-rtdb.europe-west1.firebasedatabase.app/",
        projectId: "messengerhia2020",
        storageBucket: "messengerhia2020.appspot.com",
        messagingSenderId: "223854508541",
        appId: "1:223854508541:web:25211ea1ea60b8c7230194",
        measurementId: "G-HC6Y5MRZ60"
      });
    }
  };

  //checkAuth = (mail, pass) => {
  //  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  //    .then(() => {
  //        firebase.auth().signInWithEmailAndPassword(mail, pass).then(
  //          Connexion.props.navigation.navigate('Accueil')
  //        )
  //    })
  //}


/*checkAuth = (mail, pass) => {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(firebase.auth().currentUser)
  } else {
    // No user is signed in.
    firebase.auth().signInWithEmailAndPassword(mail, pass).then(
      console.log("User vient de se connecter")
      )
    }
  });

}*/


 checkAuth = async (mail, pass) => {
  try {

    let response = await firebase.auth().signInWithEmailAndPassword(mail, pass)
    if (response && response.user) {
      console.log(response);
    }
    else {
      console.log('faux',response);
    }
  } catch (e) {
    console.log(e.message)
  }
}

var db = Firestore.firestore()

db.collection("notification").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
});




}

export default new Fire();
