const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip')
  console.log('I was cliked');
  console.log(this); // this representa o elemento
  if( !hasFlippedCard ){
    // first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
    // do cards match?
    if(firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    }else{
    // not a match
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1500);
    }
    console.log('Function was executed')
  }
}

cards.forEach( card => card.addEventListener('click', flipCard))
