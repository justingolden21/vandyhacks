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

function updateStatus(newName, newStatus, newEmoji, newAvailability) {
    let user = firebase.auth().currentUser;

    $('.name').html('<b>' + newName + '</bi>');
    $('.status').html('<i>' + newStatus + '</i>');
    $('.emoji').html(newEmoji);
    $('.availability').html(newAvailability);

    db.collection('users').doc(user.uid).update({
        name: newName,
        status: newStatus,
        emoji: newEmoji,
        availability: newAvailability
    });


}

