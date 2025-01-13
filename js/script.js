const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobilnav = document.querySelector(".mobilnav")
const card =document.querySelector(".card");


hamburger.addEventListener("click",()=>{
    bar1.classList.toggle("animationBar1")
    bar2.classList.toggle("animationBar2")
    bar3.classList.toggle("animationBar3")
    mobilnav.classList.toggle("sidebar")
    hamburger.classList.toggle("hamburgerFixed")
    card.classList.toggle("cardClik")
})