import * as firebase from 'firebase'




var firebaseConfig = {
  apiKey: "AIzaSyCgtZ-oZ3H3S0_G8YwNGx3mLp0AiMXmH8I",
  authDomain: "login-signup-add9b.firebaseapp.com",
  databaseURL: "https://login-signup-add9b.firebaseio.com",
  projectId: "login-signup-add9b",
  storageBucket: "login-signup-add9b.appspot.com",
  messagingSenderId: "968667312495",
  appId: "1:968667312495:web:c447c10bb675ca00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database();



function registration(email, pass, userData) {
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => {
      var userId = firebase.auth().currentUser.uid;
      db.ref('user/' + userId).set(userData)
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage)
    });

}


function login(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        resolve(user)
      }).catch(e => {
        reject('mssage')
      }
      )
  })

}


function userGetName(userId) {
  return new Promise((resolve, reject) => {
    db.ref('user/').once("value")
      .then(res => res.val())
      .then(res => {
        resolve(res)
      }).catch(e => {
        reject({ message: e })
      })
  })
}


function logout() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });

}


function addPost(img, describe) {

  let userId = firebase.auth().currentUser.uid
  // Create a root reference
  var storageRef = firebase.storage().ref();
  
  var imagesArray = [];

  try {
    for (var i = 0; i < img.length; i++) {
      //Upload the file and metadata
      storageRef.child(`images/${img[i].name}`).put(img[i])
        .then((snapshot) => {
          snapshot.ref.getDownloadURL()
            .then((snapUrl) => {
              imagesArray.push(snapUrl)
              if (imagesArray.length === img.length) {
                // console.log(img.length, "<============= img.length ")
                // console.log(imagesArray.length, "<============= imagesArray.length")
                var postObj = {
                  userId,
                  createdAt: firebase.database.ServerValue.TIMESTAMP,
                  imagesArray,
                  describe,
                  likeCounter: 0,
                  commentCounter: 0,
                }
                db.ref('post/').push(postObj)
                getData()
              }
            })
        })
    }
  } catch{
    alert("Select Your Images or type Describction")
  }
}


function getData() {
  return new Promise((resolve, reject) => {
    db.ref('post/').once("value")
      .then(res => res.val())
      .then(res => {
        resolve(res)
      }).catch(e => {
        reject({ message: e })
      })
  })
}




export {
  registration,
  login,
  logout,
  userGetName,
  addPost,
  getData

}