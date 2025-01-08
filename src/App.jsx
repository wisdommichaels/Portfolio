/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */

import ReactLenis from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// register gsap plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Components imports
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Review from "./components/Review"
import Skill from "./components/skill"
import Work from "./components/Work"



const  App = () => {
  // Use useGSAP to animate elements on scroll
  useGSAP(() => {
    const element = gsap.utils.toArray('.reveal-up');
   element.forEach((element) => {
     gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "-200 bottom",
        end: "bottom 80%",
        scrub: true,
      },
       y: 0,
       opacity: 1,
       duration: 1,
       ease: "power2.out"
    });
   });
    
  });


  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Review/>
        <Contact/>
        <Footer/>
      </main>
    </ReactLenis>
  )
}

export default App