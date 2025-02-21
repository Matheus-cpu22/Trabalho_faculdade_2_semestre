function sendToWhatsapp(){
	let number = "+553484454536";

	let produto = document.getElementById('produto').value;
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Produto : " +produto+ "%0a"
	+ "Nome : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Observação : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}