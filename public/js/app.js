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

function updateStatus(newName, newStatus) {
    let user = firebase.auth().currentUser;

    db.collection('users').doc(user.uid).update({
        name: newName
    });

        
}

$('#sign-in-btn').click( () => {
    let user = firebase.auth().currentUser;
    let userUid = db.collection('users').doc(user.uid);
    if(userUid != user.uid) {
        db.collection('users').doc(user.uid).set({
            name: user.displayName,
            status: ["Chilling in my room", "Studying", "Working", "Sleeping"],
            emoji: ["😎", "😊", "😃", "😄"],
            availability: ["Available", "Kind of Budy", "Busy", "Away"],
        });
    }
});