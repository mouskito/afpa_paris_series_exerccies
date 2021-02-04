$(document).ready(function () {

	$('.block').hide();

	$('#submit').click(verif);

	var tel = $('#tel');

	tel.bind('keyup', function () {

		//if (isNaN(tel.val())) {
		if (!$.isNumeric(tel.val())) {

			$('.error').html('<p>Pas valide </p>');
			$('.error').css({
				'background':'red',
				'color':'white'
			});
		}
		else{

			$('.error').html('');
		}
	})

	// Debut Compteur

	$('#message').keyup(function(){
		var nombreCaractere = $(this).val().length;
		var nombreMots = $(this).val().split(' ').length;

		$('#mots').text(nombreMots);
		$('#caractere').text(nombreCaractere);


		if (nombreCaractere > 200) {
			$('#compteur').addClass('mauvais');
			$('.mauvais').css({
				'background':'red',
				'color':'white'
			})
		}else{
			$('#compteur').removeClass('mauvais');

			$('#compteur').css({
				'background':'white',
				'color':'black'
			})

		}

	})
	


})

function verif(event) {
	event.preventDefault();

	var error = 0;
	var tous_les_inputs_type_text = $('input[type="text"]');

	for(var index=0; index < tous_les_inputs_type_text.length; index++){
		if(tous_les_inputs_type_text[index].value == ''){
			tous_les_inputs_type_text[index].focus();
			tous_les_inputs_type_text[index].style.background = 'red';

			error++;
		}else{
			tous_les_inputs_type_text[index].style.background = 'white';

		}
	}

	//var mobile =  /^(?:(?:+|00)33[\s.-]{0,3}(?:(0)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/gm;

	var mobile = /^(01|02|03|04|05|06|07|08|09)[0-9]{8}$/;
	
	if (!mobile.test($('#tel').val())) {
		alert('Numero KO')
		$('#tel').focus();
		//$('#tel').style.background='red';
		$('#tel').css({
			'background':'red'
		});
		return false;
	}

console.log(error);
	if(error>0){	
		return false;
	}
	else{

		$('#nom_ok').text($('#nom').val())

		$('.block').show();
	}

	$('form').hide();

}

