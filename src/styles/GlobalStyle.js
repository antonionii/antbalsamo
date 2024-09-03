import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --background-color: #d6aa9e;
  --text-color: shadow-color;
  --line-color: shadow-color;
  --shadow-color: white; /* Default shadow color */ ;
    --green: #28c074;
    --red: #ff4062;
    --black: #050914;
    --white: #fff5eb;
    --gray: #7a7a7a;}

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
    font-family: "Rubik", sans-serif;
    font-weight: 900;
    overflow-x: hidden;
    color: var(--text-color);
    position: relative;
    margin:0;
    padding: 0;
    width: 100%;

  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

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
  border: 1px solid shadow-color;
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
  font-family: "Inter", system-ui;
    &:hover{
        background-color: var(--background-color);
        color: white
    }

}


    h4{
        font-weight: bold;
        
        font-size: 2rem;
    }
    span{
        
            
    }
    p{
        font-family: "Inter", system-ui;
        font-weight: thin;

        padding: 3rem 0rem;
        line-height: 150%;
    }

    #wave{
        stroke: "120000";
    }
    li {
    font-family: "Inter", system-ui;
    padding-left: 3rem;
    position: relative;
    font-family: "Inter", system-ui;
    font-weight: regular;
  }
  a {
    font-family: "Inter", system-ui;
    font-size: 1.2rem;


    text-decoration: none;
    font-weight:regular;
    color: inherit;
    pointer-events:auto;

  }


.introText {
  margin: 8rem 0rem 0rem 0rem; /* Reduce top margin */
}

@media (min-width: 780px) {
  .introText {
    margin: 6rem 0rem 0rem 0rem; /* Reduce margin for medium screens */
  }
}

@media (min-width: 1300px) {
  .introText {
    margin: 4rem 0rem 0rem 0rem; /* Reduce margin for large screens */
  }
}

}


.aboutContainer{
  margin: 8rem 0rem 0rem 0rem; /* Reduce top margin */
  display:flex;
  @media (min-width: 780px) {
}


@media (mid-width: 1300px){
display: flex;
}
}
`;
export default GlobalStyle;
