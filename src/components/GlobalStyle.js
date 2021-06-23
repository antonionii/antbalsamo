import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }

}
body {
    background: #d6aa9e;
    font-family: 'Karla', sans-serif;

    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #120000;
    background: transparent;
    color: black;
    transition: all 0.5s ease;
    ffont-family: 'Karla', sans-serif;
    &:hover{
        background-color:#120000;
        color: white
    }

}

h2{
        font-weight: normal;
        font-size: 4rem;
        color: #120000;
    }
    h3{
        color: #120000;
    }
    h4{
        font-weight: bold;
        
        font-size: 2rem;
        color: #120000;
    }
    span{
        font-weight: bold;
        color: #120000;    
    }
    a{
        font-size: 1.1.rem;
        color: #120000;
    }
    p{
        padding: 3rem 0rem;
        color: #120000;
        font-size: 1.4rem;
        line-height: 150%;
    }

    #nav {
        background: #d6aa9e;
    }

    #wave{
        stroke: "120000";
    }
    li {
    padding-left: 6rem;
    position: relative;
    font-family: 'Lora', serif;    
    font-weight: regular;
    color: #120000;
  }
  a {
    color: white;
    text-decoration: none;
    font-family: 'Lora', serif;    
    font-weight: regular;    font-weight: 200;
    color: #120000;

  }
  #Logo {
    font-size: 1.5rem;
    font-family: 'Lora', serif;    
    font-weight: regular;    font-weight: normal;
    color:#120000;
  }

  #pageAnimations{
    background: black;

  }

#lineAnimations {
    background: black;
}
  
`;

export default GlobalStyle;
