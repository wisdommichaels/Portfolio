/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */


// Components imports
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skill from "./components/skill"
import Work from "./components/Work"


const  App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
      </main>
    </div>
  )
}

export default App