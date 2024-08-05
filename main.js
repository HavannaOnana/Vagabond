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

//div for the main text vagabond text
const vagabondTitle = document.querySelector("#vagabond-title");
vagabondTitle.innerHTML = `
  <div class="v-text">
           <h1>Vagabond</h1>
           <p>Vagabond (Japanese: バガボンド, Hepburn: Bagabondo) is a Japanese<br> epic martial arts manga series written and illustrated by Takehiko Inoue. It portrays a<br> fictionalized account of the life of Japanese swordsman Musashi Miyamoto<br>, based on Eiji Yoshikawa's novel Musashi.</p>
           <p class="author"> - Takehiko Inoue</p>
        </div>
        <img src="/images/mandk.png" alt="">
`
vagabondTitle.classList.add("fade-in")

//div for the strongest 4 