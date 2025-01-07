/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */

import ReactLenis from "lenis/react";

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