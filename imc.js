
var nom = $('#nom').val();

console.log(nom)


$(document).ready(function () {
	
	$('form').submit(function () {
		
		var taille = $('#taille').val();
		var poids = $('#poids').val();

		//var imc = poids/(taille*taille);
		var imc = (poids/(Math.pow(taille,2))).toFixed(1);



		if(imc > 0){
			$('.resultat').css({
				'display':'block'
			})

			$('#imc').text(imc);
		}

		if(imc < 18.5){
			$('#message').text("IMC < 18,5 kg/m² : insuffisance pondérale");
			//$('#message').
		}
		else if (imc> 18.5 && imc < 24.9) {
			$('#message').text("18,5 < IMC < 24,9 : poids normal");

		}
		else if (imc > 24.9 && imc < 29.9) {
			$('#message').text("25 < IMC < 29,9 : surpoids");

		}else{

			$('#message').text("IMC > 30 : obésité");
		}
	})

	//

	//$('.moussa').parent().addClass('afpa');
	
	$('.moussa').parents('section').addClass('cool');

	$('.test').children().removeClass('cda')

	$('form').addClass('josse')

	$('.item').siblings().first().addClass('vans');


	//-----------------------------------------------------------------

	var liens = $('.mes_liens a');

	liens.click(function(){
		//Objet courant
		//console.log($(this));

		//Parent de objet parent
		//console.log($(this).parent());
		//console.log($(this).parent());

		$(this).parent().siblings().removeClass('active');

		$(this).parent().addClass('active')

	})


})
