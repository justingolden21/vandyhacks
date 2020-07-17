const app = firebase.app();
const db = firebase.firestore();
<<<<<<< HEAD
// console.log(firebase);
=======
const auth = firebase.auth();
>>>>>>> 904ab7d71b490f8a0fe31f05983f1d6a40772ca3

function updateStatus(newName, newStatus, newEmoji, newAvailability) {
	$('.name').html('<b>' + newName + '</bi>');
	$('.status').html('<i>' + newStatus + '</i>');
	$('.emoji').html(newEmoji);
	$('.availability').html(newAvailability);

	let user = auth.currentUser;
	db.collection('users').doc(user.uid).update({
		name: newName,
		status: newStatus,
		emoji: newEmoji,
		availability: newAvailability
	});

<<<<<<< HEAD
function updateStatus(newName, newStatus, newEmoji, newAvailability) {
    let user = firebase.auth().currentUser;

    $('.name').html('<b>' + newName + '</bi>');
    $('.status').html('<i>' + newStatus + '</i>');
    $('.emoji').html(newEmoji);
    $('.availability').html(newAvailability);

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

    $('.name').html("<b>" + user.displayName + "</b>");
    $('#name-input').val(user.displayName);

});
=======

}
>>>>>>> 904ab7d71b490f8a0fe31f05983f1d6a40772ca3
