/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */

const Hero = () => {
  return (
   <section
    id="home"
    className="pt-28 lg:pt-36"
   >
    <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        
        <div>
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

          <h2 className="headline-1 max-w-[15ch] sm:mx-w-[20ch] lg:max-w-[15ch] mt-5 ">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="">
            ButtonPrimarry

            ButtonOutline
          </div>
        </div>

        <div className="">
            <figure className="flex justify-center items-center">
                <img
                src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1735992170/result_1_2_rh4v5a.png"
                alt="wisdom michaels image"
                className="w-[70%] flex justify-center items-center"
                />
            </figure>
        </div>
    </div>

   </section>
  )
}

export default Hero