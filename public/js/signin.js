let user, signedIn = false;

// https://firebase.google.com/docs/auth/web/google-signin
function signin() {
	let provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then( (result)=> {
		let token = result.credential.accessToken;

		user = result.user;

		showProfileInfo(user.displayName, user.photoURL);
        console.log("Successfully signed in with google account!");

        $('#sign-in-btn').addClass('d-none').removeClass('d-block');
        $('#sign-up-btn').addClass('d-none').removeClass('d-block');
		$('#sign-out-btn').removeClass('d-none').addClass('d-block');
		$('#toast').html('Welcome! ' + user.displayName);

		signedIn = true;

	}).catch( (err)=> {
		console.log('Sign-in error', err);

		$('#toast').html('error signing in');
		setTimeout(()=> $('#toast').html(''),3000);
	});
}
function signout() {
	firebase.auth().signOut().then( ()=> {
		$('#sign-in-btn').removeClass('d-none').addClass('d-block');
        $('#sign-up-btn').removeClass('d-none').addClass('d-block');
        $('#sign-out-btn').addClass('d-none').removeClass('d-block');
		$('#toast').html('sign-out successful');
		setTimeout(()=> $('#toast').html(''),3000);

		hideProfileInfo();

		console.log('Sign-out successful');

		signedIn = false;

	}).catch( (err)=> {
		$('#toast').html('sign-out error');
		setTimeout(()=> $('#toast').html(''),3000);

		console.log('Sign-out error', err);
	});
}

function showProfileInfo(name, src) {

}
function hideProfileInfo() {

}