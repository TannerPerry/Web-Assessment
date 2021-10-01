console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert("Form has been submitted!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function giveACompliment(event) {
event.preventDefault()
	alert("YOUR WIFE IS HOT")
}
let duckImage = document.querySelector('#rubber-duck');

duckImage.addEventListener('mouseover', giveACompliment);