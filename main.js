
// _________________JS__________________


//LOADING PAGE

let loading=document.querySelector(".loadingContainer");

window.addEventListener('load',function(){
  loading.parentNode.removeChild(loading);
});

//INTRO BUTTON

const introBtn= document.querySelector(".introBtn");
const landingPage= document.querySelector(".landingPage");

introBtn.addEventListener('click',()=>{
  landingPage.style.display="none";
  document.querySelector('body').style.overflow="visible";
});

introBtn.classList.add("introBtnShow");

//HAMBRGER MENU OPEN
const navBtn = document.getElementById("navbtn");
const navMen= document.querySelector(".listContainer");


navBtn.addEventListener('click',()=>{

  navBtn.classList.toggle("cross");
  navMen.classList.toggle("slide");
});

// _____________END OF JS______________

//__________________________GSAP________________________________

//into letters
gsap.to(".letter", { duration: 2, ease: "back", x: 2000,stagger: 0.3});

//breakers
gsap.to(".breaker", {
  scrollTrigger: {
    trigger: ".breaker",
    toggleActions: "restart neset restart none"
  },
  width: "100vw",
  duration: 7
});

//skill line

const boxes= gsap.utils.toArray(".skillLine");

boxes.forEach(box=>{

    gsap.to(box,{
        scrollTrigger: {
            trigger: box,
            markers: true,
            toggleActions: "restart none restart none"
        },
        width: 150,
        ease:  Expo. easeOut,
        duration: 3
    });

});

// _______________________END OF GSAP_____________________________

//_______________________OTHER_______________________-

// SMOOTH SCROLL
const scroll = new SmoothScroll('.nav a[href*="#"]', {
  speed: 800
});

// AOS ANIMATIONS 
AOS.init();






