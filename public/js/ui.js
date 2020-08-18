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

		// input and checkbox
		let newStatusInput = $('#add-status-input');
		let checkbox = $('#add-status-checkbox:checked');
		addStatus(newStatusInput.val(), checkbox.val());

		// Clear input field and uncheck the checkbox
		newStatusInput.val('');
		checkbox.prop('checked', false);

		// Close modal
		$('#account-modal').modal('toggle');
	});

	$('#add-status-btn').click( ()=> {
		$('#add-status-modal').modal('show');
	});
	$('#add-status-modal').on('shown.bs.modal', ()=> {
		$('#add-status-input').focus().select();
	});

	$('#quick-list-option').change( ()=> {
		// $('label[for="status-select"]').css('display','inline');
		$('#status-select').css('display','inline');
		$('#status-edit-btn').css('display','inline');
		$('#add-status-input').css('display','none');
		$('#add-status-checkbox-div').css('display','none');
	});
	$('#custom-status-option').change( ()=> {
		// $('label[for="status-select"]').css('display','none');
		$('#status-select').css('display','none');
		$('#status-edit-btn').css('display','none');
		$('#add-status-input').css('display','inline');
		$('#add-status-checkbox-div').css('display','inline');
	});

	$('#quick-list-option').change();

	// ----------------

	const AVAIL_COLOR_CLASSES = {
		'Available': 'green',
		'Kind of Busy': 'yellow',
		'Busy': 'red',
		'Away': 'purple'
	};

	$('#availability-select').change( ()=> {
		let val = $('#availability-select').val();
		$('#account-modal .user-dot.dot').removeClass('red yellow green purple').addClass(AVAIL_COLOR_CLASSES[val]);
		
		// let txt = $('#availability-select').children('option:selected').html();
		// console.log(txt);
		// $('.user-availability-text').html(txt);
	});
});

function populateSelect(selectName, optionNames) {
	$(`#${selectName}`).html(optionNames.map( str => `<option>${str}</option>`) );
}