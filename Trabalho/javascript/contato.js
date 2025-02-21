function sendToWhatsapp(){
	let number = "+553484454536";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;

	var url = "https://wa.me/" + number + "?text="
	+ "Nome : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
	+ "Mensagem : " +message+ "%0a%0a";

	window.open(url, '_blank').focus();
}