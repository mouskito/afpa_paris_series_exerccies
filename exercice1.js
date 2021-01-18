var annee = 2016;

//var annee = prompt("Entrez une année");

if ((annee % 4 === 0 && annee %100 > 0) || annee % 400 === 0) {
	console.log(annee +" est bissextile");
}else{
	console.log(annee +" n'est pas bissextile");
}