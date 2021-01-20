import firebase from 'firebase'

class Fire {
  constructor() {
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

  checkAuth = (mail, password) =>{
    firebase.auth().onAuthStateChanged(Patient =>{
      console.log(mail, password);
      if(!Patient){
        firebase.auth().signInWithEmailAndPassword(mail, password).then((Patient) => {
          alert('Connexion réussi');

  })

      }
    })
  }

}

export default new Fire();
