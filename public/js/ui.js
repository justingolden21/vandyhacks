$( ()=> {

	$('.toast').toast({delay: 30000}).toast('show');

	$('#profile-div').click( ()=> {
		$('#account-modal').modal('show');
	});

	$('#update-btn').click( ()=>{
		let name = $('#name-input').val();
		let status = $('#status-select').val();
		let emoji = $('#emoji-select').val();
<<<<<<< HEAD:public/js/scripts.js
		let availability = $('#availabilty-select').val();
=======
		let availability = $('#availability-select').children('option:selected').html();
>>>>>>> 904ab7d71b490f8a0fe31f05983f1d6a40772ca3:public/js/ui.js
		updateStatus(name, status, emoji, availability);
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

function populateSelect(selectName, optionNames) {
	$(`#${selectName}`).html(optionNames.map( str => `<option>${str}</option>`) );
}