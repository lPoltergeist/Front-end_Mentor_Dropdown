import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin: 5rem auto;

img {
   max-width: 35rem;
   width: 100%;
   height: auto;
}


aside {
    background-image: url(image-hero-desktop.png);
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 400px;
    width: 100vw;

}

button {
    background: #000;
    color: #fff;
    height: 3rem;
    width: 10rem;
    border-radius: 15px;
    margin-top: 3rem;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;

    transition: ease-in 0.2s;

    &:hover {
        background: #fff;
        color: #7b7b7b;
        outline: 1px solid #7b7b7b;
    }
}
`

export const HeroSection = styled.div`
display: flex;
margin: auto;
max-width: 90vw;



@media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    text-align: center;
    
}
`

export const TextContainer = styled.div`
align-items: center;
font-family: 'Roboto', sans-serif;

@media screen and (min-width: 400px) {
    
}

.MobileHero {
    @media screen and (min-width: 1100px) {
        display: none;
    }
}

h1 {
    font-size: 5vw;
    line-height: 80%;

    @media screen and (max-width: 1100px) {
        font-size: 3rem;
        text-align: center;
    }
}
`

export const Description = styled.div`
font-size: 1.7vw;
color: gray;
max-width: 40rem;

@media screen and (max-width: 1100px) {
        font-size: 1.2rem;
        
    }
`

export const Clients = styled.div`
display: flex;
align-items: center;
justify-content: start;
margin: 4rem 0 0 0;

@media screen and (max-width: 500px) {
    display: block;
}

    img {
        margin: 0 auto;
    width: 100px;
    height: auto;
    margin: 10px 20px;
    
}
`