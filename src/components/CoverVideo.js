import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/Walking Girl.mp4';
import "@fontsource/kaushan-script";
import '@fontsource/sirin-stencil'
import {motion} from 'framer-motion'

const VideoContainer = styled.section`
width: 100%;
height:100vh;
position:relative;

video{
  width: 100%;
  height:100vh;
  object-fit: cover;

  @media (max-width: 48em) {
    object-position: center 10%;
  }
}
@media (max-width: 30em){
  object-position: center 50%;
}
`
const DarkOverLay = styled.div`
position: absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:1;

background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
`
const Title = styled(motion.div)`
position: absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:5;

display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
color: $(props => props.theme.text);

div{
  display:flex;
   flex-direction:row;
}

h1{
  font-family:'kaushan script';
  font-size: ${props => props.theme.fontBig};
  text-shadow: 1px 1px 1px ${props => props.theme.body};
  color:white;

  @media (max-width: 40em){
    font-size: calc(5rem + 2vw);
  }
}
h2{
  font-family:"Sirin-Stencil";
  font-size: ${props => props.theme.fontlg};
  text-shadow: 1px 1px 1px ${props => props.theme.body};
  color:white;
   font-weight:300;
  text-transform: capitalize;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontmd};
    margin-top: -1.5rem;

  }
}
`

const container = {
  hidden: {
    opacity:0,
  
  },
  show: {
    opacity:1,
  

    transition:{
      delayChildren: 5,
      staggerChildren: 0.3,
    }
  }
}

const item = {
  hidden: {
    opacity:0,
  },
  show: {
    opacity:1,
  }
}
const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverLay/>
       <Title variants={container} inlist="hidden" animate="show">
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-delay ="0.13" data-scroll-speed = "4">R</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay ="0.13" data-scroll-speed = "4">E</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay ="0.13" data-scroll-speed = "4">S</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay ="0.13" data-scroll-speed = "4">C</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay ="0.13" data-scroll-speed = "4">U</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay ="0.13" data-scroll-speed = "4">E</motion.h1>


        </div>
        <motion.h2 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>Rescue. Restore. Love</motion.h2>
       </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
}

export default CoverVideo