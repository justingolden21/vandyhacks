$( ()=> {

	$('#logout-btn').click( ()=> {
		$('#signin-modal').modal('show');
	});

	$('#profile-div').click( ()=> {
		$('#account-modal').modal('show');
	});

	// ----------------

	const AVAIL_COLOR_CLASSES = {
		avail: 'green',
		kinda: 'yellow',
		busy: 'red',
		away: 'purple'
	};

	$('#availability-select').change( ()=> {
		let val = $('#availability-select').val();
		$('.dot').removeClass('red yellow green purple').addClass(AVAIL_COLOR_CLASSES[val]);
	});
});