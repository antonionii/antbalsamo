import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --background-color: #d6aa9e;
  --text-color: black;
  --line-color: black;
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html{
  overflow-x:hidden;
  
    @media (max-width: 1700px){
        font-size: 75%;
    }

    

}
body {
    background: var(--background-color);
    font-family: 'Cormorant Garamond', serif;  
    font-weight: 700;
    overflow-x: hidden;
    color: var(--text-color);
    transition: 0.3s all ease-in-out;
    position: relative;
    margin:0;
    padding: 0;
    width: 100%;

}



img {
  width: 100%;
  height:auto;
}

/* ripple stuff */
.ripple {
  width: 10px;
  height: 10px;
  background-color: transparent;
  position: fixed;
  border-radius: 50%;
  border: 1px solid black;
  transform: translate3d(-50%, -50%, 0)
}

@keyframes ripple-effect {
  to {
    width: 50px;
    height: 50px;
    opacity: 0.01
  }
}

button{
    font-weight: bold;
    color: var(--text-color);
    cursor: pointer;
    font-size: 2rem;
    padding: 1rem 2rem;
    border: 3px solid var(--text-color);
    background: transparent;
    transition: all 0.5s ease;
    font-family: 'Karla', sans-serif;
    &:hover{
        background-color: var(--background-color);
        color: white
    }

}



    h2{
        font-weight: normal;
        font-size: 7.5rem;
        color: var(--text-color);
        width: "100%";
        height: "auto";
   

    }
    h4{
        font-weight: bold;
        
        font-size: 2rem;
    }
    span{
        font-weight: bold;
        
            
    }
    p{
        padding: 3rem 0rem;
        
        font-size: 1.4rem;
        line-height: 150%;
    }

    #wave{
        stroke: "120000";
    }
    li {
    padding-left: 6rem;
    position: relative;
    font-family: 'Karla', sans-serif;
    font-weight: regular;
  }
  a {
    font-size: 1.3rem;
    text-decoration: none;
    font-family: 'Karla', sans-serif;
    font-weight:600;
    color: inherit;
    pointer-events:auto;


  }
  #Logo {
    font-size: 1.5rem;
    font-family: 'Karla', sans-serif;
    font-weight:600;
  }


/*   
 /*! locomotive-scroll v4.1.1 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
html.has-scroll-smooth {
  overflow: hidden; }

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.has-scroll-smooth body {
  overflow: hidden; }

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh; }

[data-scroll-direction="horizontal"] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap; }

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%; }

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 1; }
  .c-scrollbar:hover {
    transform: scaleX(1.45); }
  .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
    opacity: 1; }
  [data-scroll-direction="horizontal"] .c-scrollbar {
    width: 100%;
    height: 10px;
    top: auto;
    bottom: 0;
    transform: scaleY(1); }
    [data-scroll-direction="horizontal"] .c-scrollbar:hover {
      transform: scaleY(1.3); }

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 1;
  width: 30px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab; }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing; }
  [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
    right: auto;
    bottom: 0; }



    .timeline ul li:hover::before {
      background-color: aqua;
    }
  } */

  @keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}

  @-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg) ;
    -o-transform: rotate(0deg) ;
    transform: rotate(0deg) ;
  }
  to {
    -webkit-transform: rotate(360deg) ;
    -o-transform: rotate(360deg) ;
    transform: rotate(360deg) ;
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg) ;
    -moz-transform: rotate(0deg) 0% ;
    -webkit-transform: rotate(0deg) ;
    -o-transform: rotate(0deg) ;
    transform: rotate(0deg) ;
  }
  to {

    -ms-transform: rotate(360deg) ;
    -moz-transform: rotate(360deg) 100%;
    -webkit-transform: rotate(360deg) ;
    -o-transform: rotate(360deg) ;
    transform: rotate(360deg) ;
  }
}


.slider {
  position:relative;
  height:40vh;
  display: flex;
  padding: 0rem 0rem 0rem 2.7rem;
  justify-content: center;
  align-items: center;
  pointer-events: auto;

  @media (min-width:780px) {
    margin: 4rem 4rem;

  }
  @media (min-width:1300px) {
    margin: 6rem 6rem;

  }
}

.slideImage {
  width:100%;
  height: auto;
  border-radius: 10px;
}

.right-arrow {
  position: absolute;
  top: 80%;
  right: 60px;
  font-size: 3rem;
  color: var(--text-color);
  z-index: 10;
  cursor:pointer;
  pointer-events: auto;
  user-select: none;

  @media (min-width:780px){
    top:50%;
    font-size: 5rem;

    right: 32px;
  }

  @media (min-width:1300px){
    top:50%;
    font-size: 5rem;

    right: 230px;
  }
}

.left-arrow {
  position: absolute;
  top: 80%;
  left: 60px;
  font-size: 3rem;
  color: var(--text-color);
  z-index: 10;
  cursor: pointer;
  pointer-events:auto;
  user-select: none;

  @media (min-width:780px){
    top:50%;
    font-size: 5rem;

    left: 65px;
  }
  @media (min-width:1300px){
    top:50%;
    font-size: 5rem;

    left: 270px;
  }
}

.slide {
  opacity: 0;
  transition-duration: 1s ease;
}

.slide.active {
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
}

.click-around-1 {
  position: absolute;
  top: 51vh;
  transition: 1s all ease-out;
  pointer-events: none,
}


.circle-size-1 {
  width: 180px;
  height: auto;
  pointer-events: auto,
}

.click-around-2 {
  position: absolute;
  top: 58vh;
  transition: 1s all ease-out;
  pointer-events: none,
}

.circle-size-2 {
  width: 450px;
  height: auto;
}

.player-wrapper {
    display: flex;
    width: 100%;
    height:auto;
    max-width: 1200px;
    margin: 0 auto;
    z-index:10;
    padding: 2vh 0 0;
  }

  .react-player {
pointer-events: auto;
z-index:10;
}


@media only screen 
    and (device-width: 390px) 
    and (device-height: 844px) 
    and (-webkit-device-pixel-ratio: 3) {
      .click-around-1 {
        top: 47vh;
      }
  }

@media (min-width: 780px) { 
  .circle-size-1  {
    width: 460px;
  }

  .circle-size-2 {
  width: 800px;
  height: auto;
}

  .click-around-1 {
    top: 45vh;
  }

  .click-around-2{
    top:50vh;
  }
}

@media (min-width: 1300px) { 
  .circle-size-1  {
    width: 520px;
  }

  .circle-size-2 {
  width: 1300px;
  height: auto;
}

  .click-around-1 {
    top: 33vh;
  }

  .click-around-2{
    top:50vh;
  }
}

.introText{
  margin: 10rem 0rem 0rem 0rem;
}

@media (min-width: 780px) {
  .introText{
  margin: 13rem 0rem 0rem 0rem;
}
}

@media (mid-width: 1300px){
  .introText{
  margin: 8rem 0rem 0rem 0rem;
}

}
.rotating {
  pointer-events: none;


  -webkit-animation: rotating 30s linear infinite;
  -moz-animation: rotating 30s linear infinite;
  -ms-animation: rotating 30s linear infinite;
  -o-animation: rotating 30s linear infinite;
  animation: rotating 30s linear infinite;
}

svg .cls-1 {
  fill: var(--text-color, #000);
}

svg .cls-2 {
  fill: var(--text-color, #000);

}

#midCircle {
    width:300px;
    height:300px;
  }


  * {
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-color);
;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--text-color);
  }

}


   .cls-3{
    fill: var(--text-color);
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    z-index: 15;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 38px;
    right: 0px;
    top:10vh;
    text-align: center;
    z-index: 2;
    max-width: 500px;
    cursor: pointer;
    pointer-events: auto;

    }

    

  @media (min-width:780px) {
    .cls-3{
    /* flex-direction: column;
    align-items: center; */
    z-index: 15;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 60px;
    right: 0px;
    top:10vh;
    text-align: center;
    z-index: 2;
    max-width: 500px;
    cursor: pointer;
    pointer-events: auto;
    /* padding: 30rem 0rem 0rem 0rem;
    margin: 10rem 0rem 0rem 0rem; */

    }
  } 



  @media (min-width: 1100px) {
    .cls-3{
      z-index: 15;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 95px;
right: 0px;
top:6vh;
text-align: center;
  z-index: 2;
  max-width: 500px;
      cursor: pointer;
  pointer-events: auto;
    /* flex-direction: column;
    align-items: center; */

    }
  }




  .marqueeWrapper {
    display: block;
    width: 100%;
    max-width: 100%;


.profileText{
  display: block;
  width: 100%;
  margin: 30rem 0rem 0rem 0rem;
  pointer-events: auto;
  box-sizing: border-box;
}

.profileImage{
  overflow: hidden;
  z-index: 2;
  padding: 0rem 0rem 0rem 50rem;
  display: block;

  img {
    width: 50%;
    height: auto;
    object-fit: cover;
  }
}

.aboutContainer{
  display:flex;
@media (min-width: 780px) {
display: flex;
}

@media (mid-width: 1300px){
display: flex;
}
}




`;
export default GlobalStyle;
