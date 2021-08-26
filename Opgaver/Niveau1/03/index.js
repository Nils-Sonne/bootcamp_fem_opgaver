
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {


function skjulElementViaCssSelector (cssSelector) {
	let element = document.querySelector(cssSelector)
	if(element){
		element.style.display = "none";
	}

}

skjulElementViaCssSelector ("#news");
// skjulElementViaCssSelector (".container");
skjulElementViaCssSelector ("p");




}); // Afslutter: DOMContentLoaded
//done