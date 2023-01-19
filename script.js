// (function () {
//   let socials = document.querySelectorAll('.social div')

//   socials.forEach(function (social, index) {
//     social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index / 7 + 0.2}s`
//   })

//   let rocketPieces = document.querySelectorAll('.rocket-body span')

//   let rocket = document.querySelector('.rocket')

//   let triggerStart = window.innerHeight / 5;

//   let rocketOffsetTop = rocket.offsetTop;

//   let thirdOffsetTop = rocketPieces[2].offsetTop;

//   document.addEventListener('scroll', (e) => {
//     if (window.scrollY > (rocketOffsetTop - triggerStart)) {
//       rocketPieces[0].classList.add('active');
//       rocketPieces[1].classList.add('active');
//     } else {
//       rocketPieces[0].classList.remove('active');
//       rocketPieces[1].classList.remove('active');
//     }

//     if (window.scrollY > (thirdOffsetTop - triggerStart)) {
//       rocketPieces[2].classList.add('active');
//     } else {
//       rocketPieces[2].classList.remove('active');
//     }
//   })


// }())

var nav=false;

var menu=document.querySelector('.menu')
var closebtn=document.querySelector('.close-btn')
var outside=document.querySelector('.outside')

function ToggleNav(){
  console.log('function runned')
  if(nav){
    nav=false;
    outside.style.width="0";
    outside.style.padding="0";
    menu.style.display="block"
  }
  else{
    nav=true;
    outside.style.width="100vw";
    outside.style.padding=" 20vh 5vw";
    menu.style.display="none"
  }
}