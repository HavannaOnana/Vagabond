import './style.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
const strongestDiv = document.querySelector("#strongest");
strongestDiv.innerHTML = `
    <div class="strongest-images">
          <img src="/images/musashi.png" alt="">
          <div class="strongest-text">
              <h1>Musashi</h1>
              <p>He was born under the name Takezou Shinmen
                 (新免 武蔵, Shinmen Takezo)</p>
                 <h1>2</h1>
          </div>
        </div>

        <div class="strongest-images">
          <img src="/images/seijiro.png" alt="">
          <div class="strongest-text">
              <h1>Seijiro</h1>
              <p>Seijuro is the eldest son of Yoshioka Kempo
                 and brother of Denshichiro Yoshioka.</p>
                <h1>4</h1>
          </div>
        </div>

        <div class="strongest-images">
          <img src="/images/itto.png" alt="">
          <div class="strongest-text">
              <h1>Itto Itosai</h1>
              <p>Ito Ittosai (伊東 一刀斎, Itō Ittōsai), formerly know as Ito Yagoro, 
                is a legendary swordsman </p>
                <h1>1</h1>
          </div>
        </div>

        <div class="strongest-images">
          <img src="/images/kojiro.png" alt="">
          <div class="strongest-text">
              <h1>Kojiro</h1>
              <p>Kojiro is born to Sasaki Sukeyasu and his wife. Late spring of 1583</p>
              <h1>3</h1>
          </div>
        </div>
`
window.addEventListener('scroll', function(){
  if(window.scrollY > 200){
    gsap.to(strongestDiv,{duration : 3 , marginTop : '10vh' })
  }
  else{
    gsap.to(strongestDiv,{duration : 3 , marginTop : '40vh' })
  }
})


// the manga-panels page
const mangaPanels = document.querySelector("#mangapanels");

mangaPanels.innerHTML = `
   <div class="mangapanel-one">
         <div class="left">
            <img src="/images/mangapanel1.png" alt="">
            <img src="/images/mangapanel2.png" alt="">
         </div>
         <div class="right">
            <img src="/images/mangapanel3.png" alt="">
         </div>
      </div>

      <div class="mangapanel-two">
         <div class="left">
           <img src="/images/mangapanel5.png" alt="">
         </div>
         <div class="right">
            <img src="/images/mangapanel4.png" alt="">
         </div>
      </div>
`

const mangaPanelOne =  mangaPanels.querySelector(".mangapanel-one")
const mangaPanelTwo = mangaPanels.querySelector(".mangapanel-two")

window.addEventListener('scroll', function() {
  if (window.scrollY > 800) {
    mangaPanelOne.querySelector(".left").classList.add("fade-in");
    console.log("manga left panel reveal");
  }

  if (window.scrollY > 1300) {
    mangaPanelOne.querySelector(".right").classList.add("fade-in");
    console.log("manga right panel reveal");
  }

  if (window.scrollY > 1700) {
    mangaPanelTwo.querySelector(".left").classList.add("fade-in");
  }
  
  if (window.scrollY > 1900) {
    mangaPanelTwo.querySelector(".right").classList.add("fade-in");
  }
  
});

