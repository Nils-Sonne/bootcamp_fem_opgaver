
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

var color = ["#722f3e", "#125f3e",]
var i =  0; 


document.querySelector("#my-button").addEventListener("click", function(){
	i = i < color.length ?  ++i : 0;

 
document.querySelector("#my-button").style.background = color [i]

})

 
}); // Afslutter: DOMContentLoaded
//done