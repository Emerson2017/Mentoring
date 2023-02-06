let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('click', clickSquare);
});

function clickSquare(event){
    var element = event.target;
    console.log(element)
    element.innerHTML = randomOption();
}

function randomOption(){
    let options = ['X', 'O']; 
    var randomValue = Math.floor(Math.random() * options.length);
    return options[randomValue];
}