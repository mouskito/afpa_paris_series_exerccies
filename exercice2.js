//var nombrePremier = 5;
var nombrePremier = prompt("Saisir un nombre entre 0 et 100");
var divisible = 0;

if (nombrePremier >= 0 && nombrePremier <= 100) {

}
			//		2			5
for(var index = 2; index < nombrePremier; index++){

	if (nombrePremier % index == 0 ) {
		console.log(nombrePremier + "n'est pas premier");
		divisible =1;
		break;
	}
}
if (divisible == 0) {
	console.log(nombrePremier + "est premier");
}
