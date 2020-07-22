$( ()=> {

	$('.toast').toast({delay: 30000}).toast('show');

	$('#profile-div').click( ()=> {
		$('#account-modal').modal('show');
	});

	$('#update-btn').click( ()=>{
		let name = $('#name-input').val();
		let status = $('#status-select').val();
		let emoji = $('#emoji-select').val();
		let availability = $('#availability-select').children('option:selected').html();
		updateStatus(name, status, emoji, availability);

		// Close modal
		$('#account-modal').modal('toggle');
	});

	$('#add-status-btn').click( ()=> {
		$('#add-status-modal').modal('show');
	});
	$('#add-status-modal').on('shown.bs.modal', ()=> {
		$('#add-status-input').focus().select();
	});

	// Add new status
	$('#add-status-form').on('submit', (e) => {
		// Prevent from refresh on submit 
		e.preventDefault();

		let newStatusInput = $('#add-status-input');
		let checkbox = $('#add-status-checkbox:checked');
		addStatus(newStatusInput.val(), checkbox.val());
		// $('.status').html('<i>' + newStatus + '</i>');

		// Clear input field and uncheck the checkbox
		newStatusInput.val('');
		checkbox.val(undefined);
		//checkbox.prop('checked', false);

		// Close modal
		$('#add-status-modal').modal('toggle');
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