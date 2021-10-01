function showFacvoriteColor(event){
    event.preventDefault()
    alert("Favorite color is blue")
}

function showFacvoritePlace(event){
    event.preventDefault()
    alert("Favorite place is hawaii")
}

function showFacvoriteRitual(event){
    event.preventDefault()
    alert("Favorite ritual is late night basketball")
}
let colorButton = document.querySelector("#color")
let placeButton = document.querySelector("#place")
let ritualButton = document.querySelector("#ritual")
colorButton.addEventListener('click', showFacvoriteColor);
placeButton.addEventListener('click', showFacvoritePlace);
ritualButton.addEventListener('click', showFacvoriteRitual);