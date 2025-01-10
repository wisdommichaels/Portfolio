/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */

// components 
import Navbar from "./Navbar"
import { useState } from 'react';


const Header = () => {
const [navOpen, setNavOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="mx-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
            <h1>
                <a 
                href="/" 
                className="logo"
                >
                    <h1 className="text-xl font-bold text-zinc-400">
                    Wiz<span className="text-purple-400 hover:text-purple-300">Dev</span>
                    </h1>
                    {/* <img 
                    src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1734090355/logo_hhzggz.webp"
                    width={40}
                    height={40}
                    alt="GomyCode"
                    /> */}
                </a>
            </h1>

            <div className=" relative md:justify-self-center">
                <button 
                className="menu-btn md:hidden"
                onClick={() => setNavOpen((prev) => !prev)}
                >
                <span class="material-symbols-rounded">
                    {navOpen ? "Close" : "Menu"}
                </span>
                </button>

               <Navbar navOpen={navOpen}/>
            </div>

            <a 
            href="#contact" 
            className="btn btn-secondary max-md:hidden md:justify-self-end"
            >
                Contact Me
            </a>
         </div>   

    </header>
  )
}

export default Header