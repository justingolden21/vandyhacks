let user;

$('#sign-in-btn').click(signin);
$('#sign-up-btn').click(signup);
$('#logout-btn').click(signout);

let signed_in = false;

auth.onAuthStateChanged(user => {
	signed_in = Boolean(user);

	if(signed_in) {
		$('#sign-in-modal').modal('hide');

		$('.name').html(user.displayName);
		$('#name-input').val(user.displayName);
	}
	else {
		$('#sign-in-modal').modal('show');
	}
});

function signup() {
	signin(true);
}

function signin(createData=false) {
	let provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then( (result)=> {
		let token = result.credential.accessToken;
		user = result.user;

		console.log("Successfully signed in with google account!");

		if(createData) {
			db.collection('users').doc(user.uid).set({
				name: user.displayName,
				status: 'Chilling',
				emoji: '😎',
				availability: 'available',
				// status: ["Chilling in my room", "Studying", "Working", "Sleeping"],
				// emoji: ["😎", "😊", "😃", "😄"],
				// availability: ["Available", "Kind of Busy", "Busy", "Away"],
			});
		}

	}).catch( (err)=> {
		console.log('Sign-in error', err);
	});
}

function signout() {
	firebase.auth().signOut().then( ()=> {
		console.log('Sign-out successful');
	}).catch( (err)=> {
		console.log('Sign-out error', err);
	});
}
