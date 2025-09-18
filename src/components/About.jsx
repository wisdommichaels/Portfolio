/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */


const aboutItems = [
    {
      label: 'Project done',
      number: 15
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];
const About = () => {
  return (
    <section 
    id='about'
    className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 text-lg md:text-xl md:max-w-[60ch]">
                     Welcome! I&apos;m Wisdom Michael, a passionate FULL-STACK WEB DEVELOPER with the skill for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                </p>
                <div className=" flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key} className="">
                                <div className="flex items-center md:mb-2">
                                   <span className=" text-2xl font-semibold md:text-4xl">{number}</span> 
                                   <span className="text-purple-600 font-semibold md:text-3xl">+</span> 
                                </div>
                                <p className="text-zinc-400 text-sm">
                                    {label}
                                </p>
                            </div>
                        ))
                    }

                    <h1 className="text-[11px] lg:text-[18px] font-bold text-zinc-400 ml-auto">
                    Wiz<span className="text-purple-600">Dev</span>
                    </h1>

                    {/* <img 
                        src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1734090355/logo_hhzggz.webp" 
                        alt="logo" 
                        width={20}
                        height={20}
                        className=" md:w-[30px] md:h-[30px]" /> */}
                </div>
            </div>
        </div>

    </section>
  )
}

export default About