$(document).ready(function () {
	$('.container').css({
		'background':'blue',
		'color':'white',
	})


	// Les evenements

	$('p').on('click', function () {
		//$('.container').hide()

		$(this).css({
			'background':'red',
			'color':'white'
		});

		$(this).text('Vivement le week-end')
	})


	/// Cacher/Montrer

	$('button').on('click', function () {
		
	})

	$('button').click(function () {



		//$('img').toggle();

		//L
		/*if($('button').text() == "cacher"){
			$('button').text("Montrer")
		}else{

			$('button').text("cacher")
		}*/
		// Les ternaires
		$('button').text( $('button').text() == 'Monter' ? 'cacher' : 'Monter' )
	})

	function additionner(nombre1, nombre2) {
		
		return nombre1+nombre2;
	}

	//fonction anonyme qui s'éxécute automatiquement
	$(function () {
		$('ul li').hover(function() {
        $(this).find('img').animate({opacity: "0.2"});
	    }, function() {
	        $(this).find('img').animate({opacity: "1"});
	    });


	    $(".addition").text("Le resultat de la focntion: "+ additionner(5,10));
	})
})

