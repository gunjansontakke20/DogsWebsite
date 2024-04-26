import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'



const Section = styled.div`
height: 100%;
max-width: 1366px;
margin: 0 auto;
display:flex;
align-items: center;
gap: 50px;
position: relative;


.textContainer{
    flex:1;
    display: flex;
    flex-direction: column;
    gap: 20px;

   
    

}


.formContainer{
    flex:1;
    position: relative;
    padding-top: 55px;

    
    .phonesvg{
        padding-top:40px;
        padding-left:40px;
        stroke: orange;
        position: absolute;
        margin: auto;
     

        @media (max-width: 30em){
            display:none;
        
          }
        
    }
   form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 60px;
    @media (max-width: 30em){
        display:none;
    
      }
   
   } 

    input,textarea{
        width: 350px;
        padding: 15px;
        background-color: transparent;
        border: 1px solid black;
        color: black;
        border-radius: 5px;
    }
    button{
        width: 380px;
        padding: 15px;
        border: none;
        background-color: orange;
        cursor: pointer;
        font-width: 500;
    }
}

`
const Title = styled.h1`
font-size:${props => props.theme.fontxxxl};
font-family: 'kaushan script';
font-weight:300;
text-shadow: 1px 1px 1px ${props => props.theme.text};
color: ${props => props.theme.body};
position:absolute;
top:1rem;
left:5%;
z-index:11;

@media (max-width: 64em){
    font-size:${props => props.theme.fontxxxl};
    margin-top: 20px;
    }
    @media (max-width: 48em){
      font-size:${props => props.theme.fontxl};
    
    }

`
const Left = styled.div`
width: 35%;
color: ${props => props.theme.body};
padding-left: 10%;

padding-top: 200px;

min-height:100vh;



`
const Right = styled.div`
position: absolute;
left:35%;
padding-left: 20%;
min-height:100vh;

@media (max-width: 64em){
    padding-left:30%;
     
    }
   

`

const variants = {
    initial:{
        y: 500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.1,
        },
    },
};
const Contact = () => {
  return (
    <Section id='Contact'>
        <Title data-scroll data-scroll-speed="-1" >Contact Us</Title>
        <Left>
          <div className='contact' variants={variants} initial='initial' whileInView='animate'>
          <div className='textContainer' variants={variants}>
          <h2 variants={variants}>Fell free to contact us</h2>
            <div className='item' variants={variants}>
                <h2>Mail</h2>
                <span>sontakkegunjan0@gmail.com</span>
            </div>
            <div className='item' variants={variants}>
                <h2>Address</h2>
                <span>Hello Nagpur</span>
            </div>
            <div className='item' variants={variants}>
                <h2>Phone</h2>
                <span>+91 72xxxxxxxx</span>
            </div> 
          </div>
          </div>
        </Left>
       <Right>
       <div className='formContainer'>
       <motion.div className='phonesvg' initial={{opacity: 1}} whileInView={{opacity:0}} transition={{delay:2,duration:1}}>
            <svg width="250px" height="250px" viewBox='0 0 32.666 32.666'>
            <path 
            strokeWidth={0.2}
            fill="none"
             d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
       </motion.div>
            <motion.form initial={{opacity: 0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}}>
                <input type="text" required placeholder='Name'/>
                <input type='email' required placeholder='Email'/>
                <textarea rows={8} placeholder='Message'/>
                <button>Submit</button>
            </motion.form>
        </div>
       </Right>
    </Section>
  )
}

export default Contact