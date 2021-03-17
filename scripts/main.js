//Declaracion de variable 
let $miImage=document.querySelector('img');

$miImage.onclick=function()
{
	let $miSrc=$miImage.getAttribute('src');
	if ($miSrc==='images/firefox1.png') 
	{
		$miImage.setAttribute('src','images/firefox2.png');
	}
	else
	{
		$miImage.setAttribute('src','images/firefox1.png');
	}
}
let $miBoton= document.querySelector('button');
let $miTitulo=document.querySelector('h1');

if (!localStorage.getItem('nombre')) 
	{
		establecerNombreDeUsuario();
	}
	else
	{
		$miTitulo.textContent='Mozilla es Genial,'+localStorage.getItem('nombre');
	}


function establecerNombreDeUsuario()
{
	//PROMP crea un cuadro de dialogo como alert, promp pide un dato
	let $miNombre= prompt('Por Favor, Ingresa Tu nombre');
	if (!$miNombre) {
		establecerNombreDeUsuario();
	}else{
	localStorage.setItem('nombre',$miNombre);
	$miTitulo.textContent='Mozilla es genial,'+$miNombre;
	}
}



$miBoton.onclick = function() {
    establecerNombreDeUsuario();
}