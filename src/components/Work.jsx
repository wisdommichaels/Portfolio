/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736244937/Screenshot_2025-01-07_111502_zblkbl.png',
      title: 'GiftCard Trading Website',
      tools: ['API', 'MVC', 'Development'],
      projectLink: 'https://www.rexiexchange.com.ng'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736242302/Screenshot_2025-01-07_102928_cujfl2.png',
      title: 'Dog Insurance Website',
      tools: ['Web-design', 'Development'],
      projectLink: 'https://wisdommichaels.github.io/dogInsurance/'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736245774/Screenshot_2025-01-07_112854_jhvliy.png',
      title: 'Sneaker Store Website',
      tools: ['Web-design', 'Development'],
      projectLink: 'https://wisdommichaels.github.io/Store-Landing-Page/'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736245908/Screenshot_2025-01-07_113128_ecnfg3.png',
      title: 'Traveling Agency Website',
      tools: ['Web-design', 'Development'],
      projectLink: 'https://wisdommichaels.github.io/A-Traveling-Agency/'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736245458/Screenshot_2025-01-07_112350_xizmki.png',
      title: 'RealTime Weather App ',
      tools: ['API', 'Development','SPA'],
      projectLink: 'https://wisdommichaels.github.io/Realtime_Weather_App/'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736889145/Screenshot_2025-01-07_113433_ihnll1.png',
      title: 'My Personal Portfolio',
      tools: ['Web-design', 'Development'],
      projectLink: 'https://portfolio-rzig.vercel.app/'
    },
    // {
    //   imgSrc: '/images/project-6.jpg',
    //   title: 'vCard Personal portfolio',
    //   tags: ['Web-design', 'Development'],
    //   projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    // },
  ];


const Work = () => {
  return (
    <section
        id="work" 
    className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] ">
               {works.map(({imgSrc, title, tools, projectLink}, key) => (
                <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tools={tools}
                    projectLink={projectLink}
                    classes="reveal-up"
                />
               ))}
            </div>
        </div>

    </section>
  )
}

export default Work