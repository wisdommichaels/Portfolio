/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */


// components
import {ButtonPrimary, ButtonOutline} from "./Button"

const Hero = () => {
  return (
   <section

    id="home"
    className="gradient pt-28 lg:pt-36"
   >
    <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        
        <div className="lg:ml-[50px] ml-0 w-full">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
                <img
                src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1735987981/myself_ywogoy.jpg"
                width={40}
                height={40}
                alt="wisdom michaels image"
                className="img-cover"
                />
            </figure>

            <div className="flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide">
                <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                   <span className="absolute inset-0   w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> 
                </span>
                Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:mx-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 ">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
          <ButtonPrimary
            target={"https://flowcv.com/resume/86htsgsidk"}
            label="Download CV"
            icon={"download"}
          />

           < ButtonOutline
              href="#about"
              label="Scroll Down"
              icon={"arrow_downward"}
           />
          </div>
        </div>

        <div className="hidden lg:block">
            <figure className=" w-[70%] ml-[85px] max-w-[480px] flex justify-center items-center bg-gradient-to-t from-purple-500 via-25%  via-purple-400/40 to-65% rounded-[60px] overflow-hidden">
                <img
                src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1736026929/result_1_2_1_xyzwpt.png"
                alt="wisdom michaels image"
                className="w-full flex justify-center items-center"
                />
            </figure>
        </div>
    </div>

   </section>
  )
}

export default Hero