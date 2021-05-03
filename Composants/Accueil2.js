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
    var uid = user.uid;
    var db = firebase.firestore();
    var userRef = db.collection("cptProche");
    var patientRef = db.collection("Patient").doc("A0I96eIpx2WLlFXBqAbO");
    const query = userRef.where("uid", "==", uid);
    query
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((user) => {
          console.log(user.id, " => ", user.data());
          setUser(user.data());
        });
        setNotif();
      })

      .catch((error) => {
        console.log("erreur dans la reception du document", error);
      });
    patientRef.get().then((doc) => {
      setPatient(doc.data);
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
