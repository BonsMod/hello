
function bienvenue(){
	var nom = document.getElementsByName("nom")[0].value;
	if(nom)
		alert("Bonjour " + nom + ", bienvenue sur notre site");
	else
		alert("Veuillez saisir votre nom et recliquer sur le boutton");
}