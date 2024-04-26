import {dark} from './styles/Themes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll';
import {useEffect, useRef, useState} from 'react';
import Home from './section/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';
import About from "./section/About";
import Shop from './section/Shop';
import ScrollTriggerProxy from './components/ScrollTriggerProxy'
import Banner from './section/Banner';
import HappyFace from './section/HappyFace';
import Contact from './components/Contact'
import Footer from './section/Footer';
import Loader from './components/Loader';





function App(){
  const containerRef = useRef(null);
  const [loaded, setLoaded]=useState(false);

  useEffect(() => {
     setTimeout(() => {
      setLoaded(true);
    },3000);
  },[])
  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={dark}>
    <LocomotiveScrollProvider 
    options={
      {
        smooth:true,
        smartphone:{
          smooth:true,
        },
        tablet:{
          smooth:true,
        }
      }
    }
    watch={
      [
        // ..all th dependencies
      ]
    }
    containerRef={containerRef}
    >
      <AnimatePresence>
      {loaded ? null : <Loader/>}
      </AnimatePresence>
      <ScrollTriggerProxy/>
    <AnimatePresence>
    <main className='App' data-scroll-container ref={containerRef}>
        <Home/>
        <About/>
        <Shop/>
        <Banner/>
        <HappyFace/>
        <Contact/>
        <Footer/>
      </main>
    </AnimatePresence>
    </LocomotiveScrollProvider>
    </ThemeProvider>
    </>
  )
}
export default App;