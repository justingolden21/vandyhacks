

// document.addEventListener("DOMContentLoaded", event => {
//     const app = firebase.app();
//     const db = firebase.firestore();
//     db.setttings({ timestapInSnapshots: true });
//     const user = db.collection('user').doc('user1');

//     user.onSnapShot(doc => {
//         const data = doc.data();
//         document.write( data.id + '<br' );
//         document.write( data.name);
//     });
// });