import './style.css'
import gsap from 'gsap';

//div for navbar
const navBar = document.querySelector("#navbar");
navBar.innerHTML=`
    <a href="#">about</a>
       <a href="#">timeline</a>
       <a href="#">contact <ion-icon name="navigate-outline"></ion-icon></a>

`;
navBar.classList.add("fade-in")

//div for the loading line
const loadingLine = document.querySelector("#loading-line");
gsap.to(loadingLine, { duration: 4, width: '80vw' });