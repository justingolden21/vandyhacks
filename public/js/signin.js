let auth = firebase.auth();

$('#sign-in-btn').click(signin);
$('#logout-btn').click(signout);

let signed_in = false;

auth.onAuthStateChanged(user => {
	signed_in = Boolean(user);

	if(signed_in) {
		$('#signin-modal').modal('hide');
	}
	else {
		$('#signin-modal').modal('show');
	}
});


// https://firebase.google.com/docs/auth/web/google-signin
function signin() {
    let user = firebase.auth().currentUser;
    let userUid = db.collection('users').doc(user.uid);
    if(userUid != user.uid) { // if the user doesn't exist
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

    $('.name').html(user.displayName);
    $('#name-input').val(user.displayName);







	let provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then( (result)=> {
		let token = result.credential.accessToken;

		let user = result.user;

        console.log("Successfully signed in with google account!");

        $('#sign-in-btn').addClass('d-none').removeClass('d-block');
        $('#sign-up-btn').addClass('d-none').removeClass('d-block');
		$('#sign-out-btn').removeClass('d-none').addClass('d-block');
		$('#toast').html('Welcome! ' + user.displayName);

	}).catch( (err)=> {
		console.log('Sign-in error', err);

		$('#toast').html('error signing in');
		setTimeout(()=> $('#toast').html(''),3000);
	});
}
function signout() {
	firebase.auth().signOut().then( ()=> {
		console.log('Sign-out successful');
	}).catch( (err)=> {
		console.log('Sign-out error', err);
	});
}
