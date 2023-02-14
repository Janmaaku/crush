const b = document.querySelector('button.button__no');
b.addEventListener("mouseover", moveHover);
const question = document.querySelector('.question');
const yesBtn = document.querySelector(".button__yes");

yesBtn.addEventListener('click', ()=> {
    question.innerHTML = 'Yes, love you crush !!';
});

function moveHover(){
    const i = Math.floor(Math.random()*500)+1 ;
    const j = Math.floor(Math.random()*500)+1 ;

    b.style.left=1+"px"
    b.style.top=j+"px"
} 