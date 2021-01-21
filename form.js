function verif() {
	/*if (document.querySelector('#nom').value == '') {
		document.querySelector('#nom').focus();
		document.querySelector('#nom').style.background='red';
		return false;
	}

	if (document.querySelector('#prenom').value == '') {
		document.querySelector('#prenom').focus();
		document.querySelector('#prenom').style.background='red';
		return false;
	}

	if (document.querySelector('#prenom').value == '') {
		document.querySelector('#prenom').focus();
		document.querySelector('#prenom').style.background='red';
		return false;
	}*/

	var error = 0;
	var tous_les_inputs_type_text = document.querySelectorAll('input[type="text"]');
	console.log(tous_les_inputs_type_text);

	for(var index=0; index < tous_les_inputs_type_text.length; index++){
		if(tous_les_inputs_type_text[index].value == ''){
			tous_les_inputs_type_text[index].focus();
			tous_les_inputs_type_text[index].style.background = 'red';

			error++;
		}else{
			tous_les_inputs_type_text[index].style.background = 'red';

		}
	}

console.log(error);
	if(error>0){	
		return false;
	}
}
/*document.querySelector('#submit').onclick=function () {
	alert("OK")
}*/

function change() {
	ma_classe_test.style.background='red';
}
function delete_supprime() {
	ma_classe_test.style.background='green';
}

var ma_classe_test = document.querySelector('.test');

ma_classe_test.addEventListener('mouseover', change)
ma_classe_test.addEventListener('mouseout', delete_supprime)

var tel = document.querySelector('#tel');

tel.addEventListener('keyup', function () {

	if (isNaN(tel.value)) {
		document.querySelector('.error').innerHTML='<p style="color:red">Pas valide </p>';
	}
})