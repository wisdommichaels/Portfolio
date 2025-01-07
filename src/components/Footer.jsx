/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";


const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/codewithsadee'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:justify-between"> 

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                      Let&apos;s work together today!
                    </h2>
                    
                    <ButtonPrimary
                    href="mailto:ijarwisdom@gmail.com"
                    label="Start Project"
                    icon="chevron_right"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                    <div >
                        <p className="mb-2">
                            Sitemap
                        </p>
                        <ul>
                            {sitemap.map(({label, href}, key) => (
                                <li key={key}>
                                    <a 
                                    href={href}
                                    className="block text-sm py-1 transition-colors text-zinc-400 hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div >
                        <p className="mb-2">
                            Socials
                        </p>
                        <ul>
                            {socials.map(({label, href}, key) => (
                                <li key={key}>
                                    <a 
                                    href={href}
                                     target="_blank"
                                     rel="noopener noreferrer"
 
                                    className="block text-sm py-1 transition-colors text-zinc-400 hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className=" flex items-center justify-between pt-10 mb-8">
                <a 
                href=""
                className="text-zinc-400"
                >
                    <img 
                    src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1734090355/logo_hhzggz.webp" 
                    alt="logo" 
                    width={30}
                    height={30}
                    />


                </a>
                    <p className="text-sm text-zinc-500">
                        &copy; 2025 <span className="text-zinc-200">Wisdom michael </span>  
                    </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer