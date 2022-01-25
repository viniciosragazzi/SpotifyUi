const cards = document.querySelector('.cards');
const seta = document.getElementById('seta-scroll')
let scrollPerClick;
let imgPadding = 20;

console.log('on')

let scrollAmount = 0;

seta.addEventListener('click', sliderScrollRight)

function sliderScrollRight(){
    console.log(cards.scrollWidth - cards.clientWidth)
    scrollAmount+=455
    if(scrollAmount <= (cards.scrollWidth - cards.clientWidth+500)){
        cards.scrollTo({
            top:0,
            left: (scrollAmount),
            behavior: "smooth",
        });
    }else{
        cards.scrollTo({
            top:0,
            left: (0),
            behavior: 'smooth'
        });
        scrollAmount=0
    }
    console.log(scrollAmount)
}



function sliderScrollLeft(){
    cards.scrollTo({
        top:0,
        left: (scrollAmount -= scrollPerClick),
        behavior: 'smooth'
    });
   

  }