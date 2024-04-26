import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';
import img4 from '../assets/Images/4.webp';
import img5 from '../assets/Images/5.webp';
import img6 from '../assets/Images/6.webp';
import img7 from '../assets/Images/7.webp';
import img8 from '../assets/Images/8.webp';
import img9 from '../assets/Images/9.webp';
import img10 from '../assets/Images/10.webp';
import img11 from '../assets/Images/11.webp';




import {motion} from 'framer-motion'
const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
margin: 0 auto;
overflow: hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;

position: relative;

`
const Title = styled.h1`
font-size:${props => props.theme.fontxxxl};
font-family: 'kaushan script';
font-weight:300;
text-shadow: 1px 1px 1px ${props => props.theme.body};
color: ${props => props.theme.text};
position:absolute;
top:1rem;
left:5%;
z-index:11;

@media (max-width: 64em){
  font-size:${props => props.theme.fontxxxl};

  }
  @media (max-width: 48em){
    font-size:${props => props.theme.fontxl};
  
  }

`
const Left = styled.div`
width: 35%;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

min-height:100vh;
z-index:5;

position:fixed;
left:0;
display: flex;
justify-content: center;
align-items: center;

p{
padding-top:35px;
font-size:${props => props.theme.fontlg};
font-weight: 300;
width: 80%;
margin: 0 auto;
}
@media (max-width: 64em){
p{
  font-size:${props => props.theme.fontmd};

}
}
@media (max-width: 48em){
  width: 40%;
  p{
    font-size:${props => props.theme.fontsm};
  
  }
  }
  @media (max-width: 30em){
    p{
      font-size:${props => props.theme.fontxs};
    
    }
    }
`
const Right = styled.div`
position: absolute;
left:35%;
padding-left: 20%;
min-height:100vh;


background-color: ${props => props.theme.grey};
// width:65%;
display: flex;
justify-content: flex-start;
align-items: center;


h1{
  width: 5rem;
  margin: 0.2rem;
}
`
const Item = styled(motion.div)`
display: inline-block;
width:20rem;
margin-right:6rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
  width: 100%;
  height: auto;
  cursor:pointer;
}
h1{
  display: inline-block;
  width: fit-content;
  font-weight:500;
  text-align:center;
  cursor: pointer;
}
@media (max-width: 48em){
  width: 15rem;
  }

`
const Product = ({img, title = ''}) => {
  return(
    <Item
    initial = {{filter: 'grayscale(100%)'}}
    whileInView={{filter: 'grayscale(10%)'}}
    transition = {{duration: 0.5}}
    viewport = {{once: false, amount: 'all'}}
    >
      <img src={img} alt={title}/>
      <h1>{title}</h1>
    </Item>
  )
}

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);
  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top top',
            end: pinWrapWidth,
            scroller: '.App',
            scrub: true,
            pin: true,
            // markers: true,
          },
          height: `${scrollingElement.scrollWidth}px`,
          ease: 'none,'
        })
        t1.to(scrollingElement, {
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: pinWrapWidth,
            scroller: '.App',
            scrub: true,
            
            // markers: true,
          },
          x: -pinWrapWidth,
          ease: 'none,'
        })
        ScrollTrigger.refresh();
    },1000);
    return () => {
      t1.kill();
      ScrollTrigger.kill();
};
  }, [])

  return (
    <Section ref={ref} id='story'>
        <Title data-scroll data-scroll-speed="-1" >Beautiful Stories</Title>
        <Left>
        <p>
        All dogs have a beautiful story waiting to unfold, a narrative woven with the threads of loyalty, courage, and unconditional love. In a world where every paw print leaves an indelible mark, there exists a tapestry of tales told by furry companions of every shape, size, and breed.
            <br/>
            <br/>
            Some stories are filled with feats of bravery – tales of dogs who protect their families from danger, facing down foes with unwavering courage. Others are tales of friendship, as dogs form bonds that transcend species, finding solace and companionship in the unlikeliest of places.
            </p>
        </Left>
        <Right ref={horizontalRef }>
          <Product img={img1} title="Buddy"/>
          <Product img={img2} title="Max"/>
          <Product img={img3} title="Bella"/>
          <Product img={img4} title="Luna"/>
          <Product img={img5} title="Charlie"/>
          <Product img={img6} title="Daisy"/>
          <Product img={img7} title="Rocky"/>
          <Product img={img8} title="Coco"/>
          <Product img={img9} title="Bailey"/>
          <Product img={img10} title="Lucy"/>
          <Product img={img11} title="Teddy"/>
        </Right>
    </Section>
  )
}

export default Shop;