/// 2 sets of each card
/// each set of cards have matching pictures
//shuffle cards/ranomly arrange
// arrange in a grid face down 
// flip over 1 card 
//flip over another card 
//if match leave face up 
//if not match return face down 
//repeat until all cards are face up

let firstCard = false; 
let secondCard = false;

let firstCardValue;



let cards = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

console.log(cards);

cards = shuffle(cards);

console.log(cards);

const gameboard = document.querySelector('.gameboard');

console.log(gameboard);


cards.forEach(cardItem => gameboard.innerHTML += `<div class="card">${cardItem}</div>`);
//${} everything in this is a variable 

const gameCards = document.querySelectorAll('.card');
console.log(gameCards);

gameCards.forEach(gameCard => gameCard.addEventListener('click', flipCard));

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

function flipCard(){
 
  console.log(this.innerHTML);

  this.classList.add('selected');
  if(firstCard === false && secondCard === false){
    firstCard = true;
    firstCardValue = this.innerHTML;
  }
  else if(firstCard === true && secondCard === false){
    secondCard = true;

    if(this.innerHTML === firstCardValue){
      alert("they match!")
    }
    
    
  }

  else {
    firstCard = false; 
    secondCard = false ;
  }

  //select & hilight card that is clicked on 
  //check if this is the first or second card flipped 
  //if first card, keep it selected
  //if second card, compare value of both cards and disable clicking more cards 
  //if they are the same, both cards stay highlighted and can't be clicked again
  //if cards are different both get unselected/highlighted 
  //

}




