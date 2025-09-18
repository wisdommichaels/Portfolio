/**
 * @copyright 2025 Wisdom Michael (c)
 * @license Apache-2.0
 */

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// components
import { ButtonPrimary, ButtonOutline } from "./Button"

const words = ["Scalable", "Fast", "Dynamic", "Powerful", "Efficient","Modern","Robust", "Secure", "Sleek", "Intuitive"];

const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500) // every 2.5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="gradient pt-24 lg:pt-36"
    >
      <div className="container lg:grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-10">

        {/* LEFT SECTION (Reveals when in view) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:ml-[50px] ml-0 w-full"
        >
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1758232538/me_i2tq0n.jpg"
                width={40}
                height={40}
                alt="wisdom michaels image"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 text-[#a1a1aa]  max-w-[15ch] sm:mx-w-[20ch] lg:max-w-[15ch] mt-5 lg:mb-10">
            Building{" "}
            <motion.span
              key={index} // re-renders with new word
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="inline-block !text-purple-600 min-w-fit"
            >
              {words[index]}
          </motion.span>{" "}
           Websites for the Future
          </h2>

           <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className=" pb-5 pt-3 lg:hidden"
        >
          <figure className="w-full flex justify-center items-center rounded-[20px] shadow-purple-600/30 overflow-hidden shadow-2xl">
            <img
              src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1758232538/me_i2tq0n.jpg"
              alt="wisdom michaels futuristic image"
              className="w-full flex justify-center items-center"
            />
          </figure>
        </motion.div>

          <div className="flex justify-start items-center gap-3 lg:gap-7 pt-2">
            <ButtonPrimary
              href={"https://flowcv.com/resume/86htsgsidk"}
              label="Download CV"
              icon={"download"}
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon={"arrow_downward"}
            />
          </div>
        </motion.div>

        {/* RIGHT SECTION (Reveals from right with slight delay) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:block"
        >
          <figure className="w-[90%] ml-[20px] flex justify-center items-center rounded-[30px] shadow-purple-600/30 overflow-hidden shadow-2xl">
            <img
              src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1758232538/me_i2tq0n.jpg"
              alt="wisdom michaels futuristic image"
              className="w-full flex justify-center items-center"
            />
          </figure>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
