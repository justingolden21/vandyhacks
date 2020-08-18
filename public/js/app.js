const app = firebase.app();
const db = firebase.firestore();
const auth = firebase.auth();

const AVAIL_COLOR_CLASSES = {
	'Available': 'green',
	'Kind of Busy': 'yellow',
	'Busy': 'red',
	'Away': 'purple'
};

function displayStatusList(newStatus = null) {
	const user = auth.currentUser;
	db.collection('users').doc(user.uid).get().then((snapshot) => {
		let statusList = snapshot.data().statusList;
		let status = snapshot.data().status;
		let emoji = snapshot.data().emoji;
		let availability = snapshot.data().availability;
		populateSelect('status-select', statusList);

		if(newStatus == null) {
			$('#status-select').val(status);
			$('#emoji-select').val(emoji);
			$('#availability-select').val(availability).change();
		}
		else
			$('#status-select').val(newStatus);
	});
}

// Displaying profile when user is logged in
function displayProfile() {
	const user = auth.currentUser;
	db.collection('users').doc(user.uid).get().then((snapshot) => {
		let name = snapshot.data().name;
		let status = snapshot.data().status;
		let emoji = snapshot.data().emoji;
		let availability = snapshot.data().availability;

		$('#profile-div').html('');
		let content = '<b><span class="name">' + name + '</span></b><br>' +
			'<span class="emoji">' + emoji + '</span>' +
			'<span class="status"><i>' + status + '</i></span><br>' +
			'<div class="user-dot dot"></div>' +
			'<span class="availability user-availability-text">' + availability + '</span>';

		$('#profile-div').html(content);
		$('#profile-div .user-dot').addClass(AVAIL_COLOR_CLASSES[availability]);
	});
}

function addStatus(newStatus, checkbox) {
	const user = auth.currentUser;
	const userDoc = db.collection('users').doc(user.uid);	

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

		// update status list on account modal
		displayStatusList(newStatus);
	});

	// Update status on profile only
	if(checkbox == undefined) {
		$('#account-modal').modal('toggle');
		$('.status').html('<i>' + newStatus + '</i>');

		// Update current status in database
		userDoc.update({
			status: newStatus
		});
	}

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

	$('#profile-div .user-dot.dot').removeClass('red yellow green purple').addClass(AVAIL_COLOR_CLASSES[newAvailability]);
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
