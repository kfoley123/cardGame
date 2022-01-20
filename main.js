/// 2 sets of each card
/// each set of cards have matching pictures
//shuffle cards/ranomly arrange
// arrange in a grid face down 
// flip over 1 card 
//flip over another card 
//if match leave face up 
//if not match return face down 
//repeat until all cards are face up


let cards = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

console.log(cards);

cards = shuffle(cards);

console.log(cards);

const gameboard = document.querySelector('.gameboard');

console.log(gameboard);


cards.forEach(cardItem => gameboard.innerHTML += `<div>${cardItem}</div>`);
//${} everything in this is a variable 



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



