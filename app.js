/*var mes_classes = document.querySelector('.container').classList;

mes_classes.add("nouvelle");

mes_classes.remove("vanessa");
console.log(mes_classes);

// toggle

window.setInterval(function () {
	mes_classes.toggle("nouvelle_classe")
},1000)


/**Les evenements 
var p = document.querySelector('p');
p.onclick=function () {
	alert('Tu viens de cliquer');
}
*/

function jeClique() {
	alert("C'est bon je viens de cliquer!")
}

function jeDoubleClique() {
	alert("C'est bon je viens de double cliquer!")
}


var souris = document.querySelector('.test');
console.log(souris);
souris.onmouseover=function () {
	souris.style.background='red';
}


souris.onmouseout=function () {
	souris.style.background='white';
}


/** Correction calcul ***/

var nombre1 = document.getElementById('nombre1');
var nombre2 = document.getElementById('nombre2');
var operateur = document.getElementById('operateur');

document.getElementById('calculer').onclick = function () {
	if (operateur.value == "+") {
		
		//console.log(parseInt(nombre1.value)+parseInt(nombre2.value));
		
		alert(nombre1.value+""+operateur.value+""+nombre2.value+"="+
			(parseInt(nombre1.value)+parseInt(nombre2.value)));
	}
	else if (operateur.value == "-") {
		
		//console.log(parseInt(nombre1.value)+parseInt(nombre2.value));
		
		alert(nombre1.value+""+operateur.value+""+nombre2.value+"="+
			(parseInt(nombre1.value)-parseInt(nombre2.value)));
	}else if (operateur.value == "*") {
		
		//console.log(parseInt(nombre1.value)+parseInt(nombre2.value));
		
		alert(nombre1.value+""+operateur.value+""+nombre2.value+"="+
			(parseInt(nombre1.value)*parseInt(nombre2.value)));
	}
}


/******/





/*
var nom = document.getElementById('nom');

console.log(nom);

nom.onkeyup= function () {
	console.log(nom.value)
}
*/


































/*var id = document.getElementById('test');
console.log( id );
console.log( id.innerHTML );

document.getElementById('test').innerHTML="Salut"
console.log( id.innerHTML );


var ma_classe =document.getElementsByClassName('container');
ma_classe[1].style.background='yellow';
ma_classe[0].style.background='red';
ma_classe[2].style.background='blue';
console.log(ma_classe[1]);

/*console.log(document.getElementsByTagName('p'));

var tab =['test','test2'];
			0		1
console.log(tab[1]);*/

/*console.log( document.querySelector('#container') );



console.log( document.querySelectorAll('.container') );
console.log( document.querySelectorAll('p') );*/