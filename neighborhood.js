function randomRestaurant (event){
    event.preventDefault
let redArr = ["Wendys", "Jimmy Johns", "Five Guys", "In-n-out",]
var item = redArr[(Math.random()*redArr.length)|0];
alert(item)

}
let randomButton = document.querySelector("#random-button")
randomButton.addEventListener('click', randomRestaurant);