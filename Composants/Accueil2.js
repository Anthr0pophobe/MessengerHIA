import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, FlatList, Text, Button } from "react-native";
import firebase from "firebase";
import "firebase/firestore";
import Fire from "../firebaseAPI.js";
import { useStore } from "react-hookstore";

const Accueil2 = () => {
  const [notif, setNotif] = useState([]);
  const [user, setUser] = useStore("userStore");
  const [patient, setPatient] = useStore("patientStore");

  useEffect(() => {
    var user = firebase.auth().currentUser;
    /*Permet d'obtenir l'uid de l'user actif*/
    var userUid = user.uid;
    var db = firebase.firestore();
    var userRef = db.collection("cptProche");
    var patientRef = db.collection("Patient");
    /*compare l'UID de l'utilisateur connecté et le compare avec la base de donnée
    pour récuperer les données de l'user actif.*/
    const queryUser = userRef.where("uid", "==", userUid);
    queryUser
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((user) => {
          console.log(user.id, " => ", user.data());
          /*User contient les datas de l'utilisateur, réucp dans la BDD */
          setUser(user.data());
        });
        setNotif();
      })

      .catch((error) => {
        console.log("erreur dans la reception du document", error);
      });
      for (var i = 0; i < user.mail.length; i++) {
        user.mail[i]
      }
    const queryPatient= patientRef.where(,,);
    patientRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((user) => {

        })
      setPatient(doc.data());
      console.log({ patient });
    });
    console.log(notif);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.logo} source={require("../Media/Logo.png")} />
        <Button
          onPress={() => {
            console.log(notif);
          }}
        />
      </View>
    </View>
  );
};

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
  container: {
    flex: 1,
    backgroundColor: "#373c78",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "95%",
    height: "97%",
    backgroundColor: "#00164c",
    alignItems: "center",
    borderRadius: 3,
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
});

export default Accueil2;
