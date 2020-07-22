const app = firebase.app();
const db = firebase.firestore();
const auth = firebase.auth();

function addStatus(newStatus, checkbox) {
	let user = auth.currentUser;
	let userDoc = db.collection('users').doc(user.uid);

	// Update the status list
	userDoc.get().then( (snapshot) => {
		let statusList = snapshot.data().statusList;
		if(!statusList.includes(newStatus) && checkbox != undefined) {
			statusList.push(newStatus);
			console.log("List of status: " + statusList);
			
			userDoc.update({
				statusList: statusList
			});
		}
	});

	// Update current status in database
	userDoc.update({
		status: newStatus
	});

	// Update current status in profile
	$('.status').html('<i>' + newStatus + '</i>');

}

function updateStatus(newName, newStatus, newEmoji, newAvailability) {
	$('.name').html('<b>' + newName + '</b>');
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

function getStatusList(user) {
	let userDoc = db.collection('users').doc(user.uid);
	userDoc.get().then((snapshot) => {
		let statusList = snapshot.data().statusList;
		if (!statusList.includes(newStatus)) {
			statusList.push(newStatus);
			console.log("List of status: " + statusList);

			userDoc.update({
				statusList: statusList
			});
		}
	});	
}
