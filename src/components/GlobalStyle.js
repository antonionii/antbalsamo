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
  

  .videoBox {
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
  
  .videoBox ul {
    list-style: none;
  }
  .videoBox ul li {
    padding: 1rem;
    color: white;
    margin-bottom: 20px;
    height: 10rem;
  }
  .videoBox ul li:last-child {
    margin-bottom: 0;
  }

  .videoCard p {
    font-size: 1rem;
    line-height: 30px;
    font-weight: 300;
  }



  .videoCard .cardLine {
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }
  @media only screen and (min-width: 768px) {
    .videoBox:before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: .1rem;
      height: 100%;
      background-color: black;
    }

    .videoBox ul li {
      width: 50%;
      position: relative;
      margin-bottom: 50px;
    }
    .videoBox ul li:nth-child(odd) {
      float: left;
      clear: right;
      transform: translateX(-40px);
      border-radius: 20px 0px 20px 20px;

    @media  (min-width: 720px){
    .videoCard .cardLine {
      top: -1rem;
      content: "";
      position: relative;
      width: 141%;
      left: 10.3rem;
      height: .1rem;
      background: black;
      transform: translateX(-50%);



    }}
    .videoCard h3 {
    font-size: 1.rem;
    transform: translateX(-25.5%)
    
     }

     .videoCard {

img{
    width: 130%;
    transform: translateX(-20%);
    padding: 1rem 0rem 0rem 0rem;
}
    position: relative;
}
    }
    .videoBox ul li:nth-child(even) {
      float: right;
      clear: left;
      transform: translateX(30px);
      border-radius: 0px 20px 20px 20px;

      .videoCard .cardLine {
      top: -1rem;
      content: "";
      position: relative;
      width: 141%;
      left: 13.3rem;
      height: .1rem;
      background: black;
      transform: translateX(-50%);



    }}
    .videoCard h3 {
    font-size: 1.rem;
    transform: translateX(105%);
    
     }

     .videoCard {

img{
    width: 130%;
    transform: translateX(-1%);
    padding: 1rem 0rem 0rem 0rem;
}
    position: relative;
}
    }

    .videoBox ul li:nth-child(odd)::before {
      transform: translate(50%, -50%);
      right: -30px;
    }
    .videoBox ul li:nth-child(even)::before {
      transform: translate(-50%, -50%);
      left: -30px;
    }





    .timeline ul li:hover::before {
      background-color: aqua;
    }
  }
  `;

export default GlobalStyle;
