//  selectionner les éléments ayant pour classe "hole";
const holes = $('.hole');
let nbrHoles = holes.length;
//  selectionner l'élément ayant pour classe "score";
const scoreBoard = $('.score');
//  selectionner les éléments ayant pour classe "mole";
const moles = $('.mole');

// button
$('button').click(startGame);

function startGame (){

    let inter = setInterval(function (){
        // random hole --> up
        let h = Math.floor(Math.random()*holes.length);
        $(holes[h]).children().addClass('up');

        // interval de 200ms à 1 s
        let time = 200 + Math.round(Math.random()*800);
        let ref = setInterval(function (){
            $(holes[h]).children().removeClass('up');
            console.log(time);
        }, time);

    }, 1200)

    // point for click
    let touch = 0;
    moles.click(function (){
        touch ++;
        scoreBoard.text(touch);
    })

    //  end game
    setTimeout(function (){
        clearInterval(inter);
        alert('Votre score est de :' + touch);
        scoreBoard.text(0);
    }, 10000)
}

