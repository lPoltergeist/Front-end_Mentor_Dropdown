import React from 'react' 
import {Container, TextContainer, Description, HeroSection, Clients} from './styles';

import Audiophile from '../../images/client-audiophile.svg'
import Databiz from '../../images/client-databiz.svg'
import Maker from '../../images/client-maker.svg'
import Meet from '../../images/client-meet.svg'



const Hero = () => {

const ScreenWidth = window.screen.width;

console.log(ScreenWidth);
  return (
    <Container>
       <HeroSection>
       <TextContainer>
        <div className="MobileHero">
            <img src="/image-hero-mobile.png" />
        </div>
        <h1>
            Make<br/> remote work
        </h1>
        <Description>
        <span>Get your team in sync, no mater your location.
            Steamline processes, create team rituals, and watch productivity soar.
        </span>
        </Description>
        <button>Learn More</button>

        <Clients>
           <img src={Audiophile} />
            <img src={Databiz} />
            <img src={Maker} />
            <img src={Meet} />
        </Clients>
        </TextContainer>
        <aside className="image">
            
            </aside>
       </HeroSection>
    </Container>
  )
}

export default Hero