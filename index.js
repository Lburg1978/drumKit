// below is adding an event listener to all buttons classed as drum in the HTML page.
// this is a for loop.
// the event listener kicked off a function that alerted "I got clicked."



// detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    //the above statement is passing in buttonInnerHTML which is the button that got pressed

    buttonAnimation(buttonInnerHTML)


  });
}

//detecting keydown events
document.addEventListener("keydown", function(event) {

  makeSound(event.key)
  
  buttonAnimation(event.key)

}); //originally I had these brakcets at the very end of this code. the button clicks did not work
//however, now they do.



function makeSound(key) {
  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:

  }
}

function buttonAnimation(currentKey) {

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100)



}



// });





// this.style.color = "white";
// var audio = new Audio ("sounds/tom-1.mp3");
//  audio.play();
