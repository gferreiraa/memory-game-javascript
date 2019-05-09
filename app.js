const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip')
  console.log('I was cliked');
  console.log(this); // this representa o elemento
}

cards.forEach( card => card.addEventListener('click', flipCard))
