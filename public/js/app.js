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

$('#sign-in-btn').click( () => {
    let user = firebase.auth().currentUser;
    let userUid = db.collection('users').doc(user.uid);
    if(userUid != user.uid) {
        db.collection('users').doc(user.uid).set({
            name: user.displayName,
            status: ["Chilling in my room", "Studying", "Working", "Sleeping"],
            emoji: ["😎", "😊", "😃", "😄"],
            availability: ["Available", "Kind of Busy", "Busy", "Away"],
        });
    }

    $('.name').html("<b>" + user.displayName + "</b>");
    $('#name-input').val(user.displayName);

});