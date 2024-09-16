const yes = document.getElementById('yes');
const no = document.getElementById('no');
const responInput = document.querySelector(".response-input");
let modalContent = document.querySelector(".modal-content");
let blurBg = document.querySelector(".blur-bg");
let closeModal = document.querySelector(".close-modal");
let closePopup = document.querySelector(".close-popup");
let closeNew = document.querySelector(".confirm-btn");
let newModalContent = document.querySelector(".new-modal-content");
var yesButton = document.getElementById("yes-btn");
var music = document.getElementById("background-music");
let scaleNo = 1;
let scaleYes = 1;
no.addEventListener('mouseover', ()=> {
    scaleNo -= 0.1;
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
let typingTimer;  
const done = 300;  
responInput.addEventListener('input', function() {
    clearTimeout(typingTimer);     
    typingTimer = setTimeout(function() {
        if (responInput.value === "") {
            return;
        }
        responInput.value = "Dạaa anh iu :3";  
    }, done);
    if (responInput.value.trim() === "") {
        closeNew.disabled = true;
    } else {
        closeNew.disabled = false;
    }
});

yes.addEventListener('click',  function(){
    modalContent.classList.remove("hidden-modal");
    blurBg.classList.remove("hidden-blur");
    music.play(); 
    no.classList.add("hidden-buttons");
    triggerConfetti();
})
let closeModalFunction = function () {
    modalContent.classList.add("hidden-modal");
    newModalContent.classList.remove("hidden-modal");
}
closeModal.addEventListener("click", closeModalFunction);

closeNew.addEventListener('click', function() {
    newModalContent.classList.add("hidden-modal");
    blurBg.classList.add("hidden-blur");
    alert("Hứa rùiii đó nha!!\nMai anh qua đón Bé iuuu <3 ");
    responInput.value = "";
    music.pause();
    music.currentTime = 0;   
    no.classList.remove("hidden-buttons");
    window.location.href = "https://www.facebook.com/profile.php?id=100010430084777";
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape"
    && !modalContent.classList.contains("hidden")
    ) {
    closeModalFunction();
    }
});

document.addEventListener("keydown", function(event){
    if(event.key === "Enter" && !newModalContent.classList.contains("hidden")){
        newModalContent.classList.add("hidden-modal");
        blurBg.classList.add("hidden-blur");
        alert("Hứa rùiii đó nha!!\nMai anh qua đón Bé iuuu <3 ");
        responInput.value = "";
        music.pause();
        music.currentTime = 0;   
        no.classList.remove("hidden-buttons");
    }
})
function triggerConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}

  
