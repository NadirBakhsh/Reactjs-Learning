import * as firebase from 'firebase';
import 'firebase/firestore'
import { promises } from 'dns';

var firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function register(email, password, userObj) {
  return new Promise((res, rej) => {

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      var userId = firebase.auth().currentUser.uid;
      userObj.id = userId
      db.collection("users").doc(userId).set(userObj)
    }).then(() => {
      res({ message: 'SuccessFuly' });
    })

  })


}



function login(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((users) => {
        resolve(users)
      }).catch(e => {
        reject('mssage')
      }
      )
  })

}



function getAllUser() {
  return new Promise((resolve, reject) => {
    db.collection('users').get().then(snapshot => {
      var userId = firebase.auth().currentUser.uid;
      console.log(userId, "<<<<<<<<<<<<<<<<")
      const users = []
      snapshot.forEach(elem => {
        if (userId !== elem.data().id) {
          users.push({ email: elem.data().email, id: elem.id })
        }
      })
      resolve(users)
    })
  })
}


function createRoom(friendId){
  var userId = firebase.auth().currentUser.uid;
  let chatExit = false;
  
  return new  Promise((resolve , reject)=>{
    //check Room 
    db.collection('chatrooms')
    .where('users.' + userId , '==' , true)
    .where('users.' + friendId , '==' , true).get()
    .then((snapshot)=>{
      snapshot.forEach(elem =>{
        chatExit = {data : elem.data(), id : elem.id}
      })

      if(!chatExit){
        const obj = {
          createAt : Date.now(),
          users :{
            [friendId] : true,
            [userId] : true,
          }
        }
        db.collection('chatrooms').add(obj).then((snapshot)=>{
          resolve({data : obj , id : snapshot.id})
        })
      }else{
        resolve(chatExit)
      }

    })
  })
}


function sendMessageToDb(roomId , message){
const obj = {
  message,
  userId : firebase.auth().currentUser.uid,
  timeStamp : Date.now(),
}

return db.collection('chatrooms').doc(roomId).collection('messages').add(obj)

}

export {
  register,
  login,
  getAllUser,
  createRoom,
  sendMessageToDb,
}

