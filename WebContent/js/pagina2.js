 
function inicio(){
	
	
}
 

function mostraralerta(){
	alert('hizo clic!');
	}
	function hacerclic(){
	document.getElementsByTagName('p')[0].onclick=mostraralerta;
	}
	window.onload=hacerclic;
	 
	function mostraralerta(){
	alert('hizo clic!');
	}
	function hacerclic(){
	//var elemento=document.getElementsByTagName('p')[0];
	//elemento.addEventListener(‘click’, mostraralerta, false);
	//}
	//window.addEventListener(‘load’, hacerclic, false);
	};
