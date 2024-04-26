import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Svgs/star_white_48dp.svg'
import {motion} from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Section = styled.section`
min-height:100vh;
width: 100vw;
margin: 5rems auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

position: relative;
`
const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 10vw;
    height: auto;
}
h3{
    font-size: ${props => props.theme.fontxl};
    font-family: 'kaushan script';  

    @media (max-width: 48em){
        font-size: ${props => props.theme.fontxl};
    }
}
`
const  FooterComponent = styled(motion.footer)`
width: 80vw;

ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${props => props.theme.text};
    border-bottom: 1px solid ${props => props.theme.text};

    @media (max-width: 48em){
        justify-content: center;
    }
}
li{
    padding: 2rem;
    font-size: ${props => props.theme.fontxl};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }
    

    @media (max-width: 48em){
        padding: 1rem;
        font-size: ${props => props.theme.fontmd};
    }
}
`
const Bottom = styled.div`
padding: 0.5rem 10;
margin: 0 4rem;
font-size: ${props => props.theme.fontlg};

display: flex;
justify-content: space-between;
align-items: center;
a{
    text-decoration: underline;
}

@media (max-width: 48em){
    flex-direction:column;
    justify-content: center;
    span{
        transform: none !important;
    }
}

@media (max-width: 48rem){
    font-size:${props => props.theme.fontmd};
}
`
const Footer = () => {
    const {scroll} = useLocomotiveScroll();
    const handlescroll = (id) => {
        let elem = document.querySelector(id);

        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25,0.0,0.35,1.0]
            })
    }
  return (
    <Section>
        <LogoContainer>
            <img 
            data-Scroll data-scroll-speed='2'
            src={Logo} alt="Rescue Paws"/>
            <h3 data-Scroll data-scroll-speed='-1'>Rescue Paws</h3>
            </LogoContainer>
            <FooterComponent
              initial={{y: "-400px"}}
              whileInView={{y:0}}
              viewport={{once: false}}
              transition={{
                  duration: 1.5
              }}>
                <ul>
                    <li  onClick={() => handlescroll('#home')}>home</li>
                    <li  onClick={() => handlescroll('.about')}>about</li>
                    <li  onClick={() => handlescroll('#Contact')}>Contact Us</li>
                    <li>
                        <a href='https://www.instagram.com/three_pawstripod/' target='_blank' rel='no'>Happy Page</a>
                    </li>
                    
                </ul>
            </FooterComponent>
            <Bottom>
                
                <span
            data-Scroll data-scroll-speed='2' data-scroll-direction="horizontal"
            >Made with &hearts; by &nbsp;
                    <a href='https://www.instagram.com/three_pawstripod/' target="_blank" rel='noreferrer'>
                        Gunjan Sontakke
                    </a>
                </span>
            </Bottom>
    </Section>
  )
}

export default Footer