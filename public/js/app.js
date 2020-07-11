const app = firebase.app();
const db = firebase.firestore();   
// console.log(firebase);

function getData(user) {
    db.collection('users').doc(user.uid).get().then(snapshot=> {
		console.log(snapshot);

		if(snapshot.data() ) {
			importData(snapshot.data().savedata);
		} else {
			createData(user);
		}

	});
}

function updateStatus(st) {
    let user = firebase.auth().currentUser;
    console.log(user);
    console.log(user.uid);
    createUser();
    // db.collection('users').doc(user.uid).update({status: st});
}

function createUser() {
    let user = firebase.auth().currentUser;
    console.log(user);
    console.log(user.uid);
    db.collection('users').doc(user.uid).set({name: 'Joe'});
}