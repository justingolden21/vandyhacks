const app = firebase.app();
const db = firebase.firestore();
const auth = firebase.auth();

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


}
