$( ()=> {

	$('.toast').toast({delay: 3000}).toast('show');

	$('#logout-btn').click( ()=> {
		$('#signin-modal').modal('show');
	});

	$('#profile-div').click( ()=> {
		$('#account-modal').modal('show');
	});

	$('#update-btn').click( ()=>{
		let status = $('#status-select').val();
		updateStatus(status);
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
		$('.user-dot.dot').removeClass('red yellow green purple').addClass(AVAIL_COLOR_CLASSES[val]);

		let txt = $('#availability-select').children('option:selected').html();
		console.log(txt);
		$('.user-availability-text').html(txt);
	});
});