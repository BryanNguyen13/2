const yes = document.getElementById('yes');
const no = document.getElementById('no');
let modalContent = document.querySelector(".modal-content");
let blurBg = document.querySelector(".blur-bg");
let closeModal = document.querySelector(".close-modal");
let closePopup = document.querySelector(".close-popup");
var yesButton = document.getElementById("yes-btn");
var music = document.getElementById("background-music");
let scaleNo = 1;
let scaleYes = 1;
no.addEventListener('mouseover', ()=> {
    // const x = Math.floor(Math.random() * (window.innerHeight-150));
    // const y =  Math.floor(Math.random() * (window.innerHeight-150));
    // no.style.left = `${x}px`;
    // no.style.top = `${y}px`;
    scaleNo -= 0.05;
    if (scaleNo < 0.1) scaleNo = 0.1;

    no.style.transform = `scale(${scaleNo})`;
    scaleYes = 1 + (1 - scaleNo);
    yes.style.transform = `scale(${scaleYes})`;
    const noWidth = no.offsetWidth;
    const noHeight = no.offsetHeight;
    const maxX = window.innerWidth - noWidth;
    const maxY = window.innerHeight - noHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    no.style.left = `${x}px`;
    no.style.top = `${y}px`;
});
// no.addEventListener('mouseover', function(){
//     no.style.transform = 'scale(0.5)';
// });
yes.addEventListener('click',  function(){
    modalContent.classList.remove("hidden-modal");
    blurBg.classList.remove("hidden-blur");
})
let closeModalFunction = function () {
    modalContent.classList.add("hidden-modal")
    blurBg.classList.add("hidden-blur")
}
blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", function(){
    alert('Giờ Em Sẽ Là Của Anh 3==D');
    music.pause();
    music.currentTime = 0;
});
closeModal.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape"
    && !modalContent.classList.contains("hidden")
    ) {
    closeModalFunction();
    music.pause();
    music.currentTime = 0;
    }
});
yesButton.addEventListener("click", function() {
    music.play();
  });
  
