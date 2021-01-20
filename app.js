//var para = document.getElementsByTagName('p');
var para = document.querySelectorAll('p');

console.log(para);

for(var index=0; index<para.length; index++){
	if (index%2==0) {
		//para[index].style.background='red';
		//para[index].style.color='blue';

		// Css Multiple
		para[index].style.cssText = 'background:orange; color:blue; width:250px; heigth:150px;'
	}
	else{

		para[index].style.background='yellow';
	}
}
































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