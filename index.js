var numberOfLengthButtom = document.querySelectorAll("button").length;

for (var i = 0; i < numberOfLengthButtom; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(event) {
    var keyboardChar = event.key;
    makeSound(keyboardChar);
    buttonAnimation(keyboardChar);
});

function makeSound(key) {
    switch ((key)) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'k':
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case 'l':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}


function buttonAnimation(buttonKey) {
    var keyPressed = document.querySelector("." + buttonKey);
    keyPressed.classList.add("pressed");
    setTimeout(function() {
        keyPressed.classList.remove("pressed");
    }, 50);
}


/* 
function demoFunction() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
} */





/* function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
} */