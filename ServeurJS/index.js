const express = require('express');
const app = express();


var admin = require("firebase-admin");


var serviceAccount = require("firebase-adminsdk-23unn@messenger-hia.iam.gserviceaccount.com");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


const test = db.collection('cptProche').doc('x1JdxD6uCs6De1Xl32WS');
const doc =  test.get();
if(!doc.exists){
    console.log('No such document !');
} else{
    console.log('Document data :', doc.data());
}

/*
app.get('/Ping', (req, res) => {
    res.send('pong');
});

app.listen(8080, () => {
    console.log('Server is listenning on port : 8080');
});
*/