/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */

import Skillcard from "./Skillcard";


const skillItem = [
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736331569/png-transparent-typescript-hd-logo-thumbnail_fk4hxd.png',
      label: 'TypeScript',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736120576/javascript-logo-javascript-icon-transparent-free-png_e1od5z.png',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736118762/How_to_use_React_s_higher-order_components-removebg-preview_rzd3tt.png',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736121339/node-js-icon-1817x2048-g8tzf91e_iibftb.png',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736118762/images__2_-removebg-preview_ij1aqh.png',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736331894/HTML5_logo_and_wordmark.svg_eaiqc8.png',
      label: 'HTML',
      desc: 'Markup Language',
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736121504/images__3_-removebg-preview_jxyted.png',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736118762/images__1_-removebg-preview_q4zdn6.png',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736119874/free-logo-css-free-png_ndgb8u.png',
      label: 'CSS',
      desc: 'User Interface',
    },
    {
      imgSrc: 'https://res.cloudinary.com/duwfbyhyq/image/upload/v1736118762/MongoDB_affine_l_%C3%A9quilibrage_de_charge_avec_sa_version_2_4_-_Le_Monde_Informatique-removebg-preview_k5h7ol.png',
      label: 'MongoDB',
      desc: 'Database'
    },
  ];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3 mt-8">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) => (
                           <Skillcard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                           />
                        ))
                    }
            </div>
        </div>
    </section>
  )
}

export default Skill