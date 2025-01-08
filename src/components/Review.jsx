/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// register gsap plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);



import ReviewCard from "./ReviewCard";


const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Austine',
      // imgSrc: '/images/people-1.jpg',
      company: 'NIT'
    },
    
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Okpeta Gideon',
      // imgSrc: '/images/people-3.jpg',
      company: 'Amazon'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Okeke David',
      // imgSrc: '/images/people-2.jpg',
      company: 'GoMyCode'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Joseph',
      // imgSrc: '/images/people-4.jpg',
      company: 'LSE'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Christiana',
      // imgSrc: '/images/people-5.jpg',
      company: 'GoMyCode'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Esther',
      // imgSrc: '/images/people-6.jpg',
      company: 'Skyline Digital'
    }
  ];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide',{
      scrollTrigger:{
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
      },
      x: '-1000'
    })
  });

  return (
    <section
    id="reviews" 
    className="section overflow-hidden"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                What our clients say
            </h2>

            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content, name, company}, Key) => (
                   <ReviewCard
                    key={Key}
                    name={name}
                    company={company}
                    content={content}
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

export default Review