


$(function() {
	$('#edit-profile-button').click(function(){
		$('.profile-bubble').hide();
		$('.edit-profile-bubble').show();
	});

	$('#nvm-edit-profile').click(function(){
		$('.edit-profile-bubble').hide();
		$('.profile-bubble').show();
	});

	$('.change-password').click(function(){
		$('.change-password-box').show();
		$('.change-password').hide();
	});

	$('.nvm-change-password').click(function(){
		$('.change-password-box').hide();
		$('.change-password').show();
	});

});