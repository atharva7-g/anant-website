// const hamburger = document.querySelector(".hamburger");  
// const navsub = document.querySelector(".nav-items");  
// hamburger.addEventListener('click', () => {  
//  hamburger.classList.toggle("change")  
//  navsub.classList.toggle("nav-change")  
// }); 


const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML=`
    <div class="nav">
    <img src="images1/a.png" class="brand-logo" alt="">
    <div class="nav-items">
        <li><a href = "index.html">Home</a></li>
        <li><a href = "updates.html">Updates</a></li>
        <li><a href = "papers.html">Publications</a></li>
        <li class = "dropdown">
            <a class = "dropdown-toggle" data-toggle = "dropdown" href = "subsystems.html">Subsystems
                <i class="fa-solid fa-angle-down"></i>
            </a>
            <ul class = "dropdown-menu">
            <li><a href = "subsystems.html#pal">PAYLOAD</a></li>
            <li><a href = "subsystems.html#obc">OBC</a></li>
            <li><a href = "subsystems.html#eps">EPS</a></li>
            <li><a href = "subsystems.html#adcs">ADCS</a></li>
            <li><a href = "subsystems.html#mech">MECH</a></li>
            <li><a href = "subsystems.html#tele">TELE</a></li>
            <li><a href = "subsystems.html#psd">PSD</a></li>
            </ul>
        </li> 
        <li><a href = "team.html">Team</a></li>
        <li><a href = "sponsor.html">Sponsor</a></li>
        <li><a href = "contact.html">Contact Us</a></li>
    </div>
    <div class="hamburger">
        <span class="icon-bar" id="bar1"></span>
        <span class="icon-bar" id="bar2"></span>
        <span class="icon-bar" id="bar3"></span>
    </div>
   
    </div>
    `
}

createNav();
const hamburger = document.querySelector(".hamburger");  
const navsub = document.querySelector(".nav-items");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
});  