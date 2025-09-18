/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// register gsap plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from "./ReviewCard";

const reviews = [
   
    {
    content:
      "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
    name: "Joseph",
    company: "LSE",
  },
  {
    content:
      "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
    name: "Okpeta Gideon",
    company: "Amazon",
  },
   {
      content:
        "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
      name: "Okeke David",
      company: "GoMyCode",
    },

  {
    content:
      "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
    name: "Esther",
    company: "Skyline Digital",
  },
    {
    content:
      "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
    name: "Austine",
    company: "NIT",
  },
  {
    content:
      "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
    name: "Christiana",
    company: "GoMyCode",
  },
  
];

const Review = () => {
  // Run GSAP only on desktop (md and above)
  useGSAP(() => {
    if (window.innerWidth >= 768) {
      gsap.to(".scrub-slide", {
        scrollTrigger: {
          trigger: ".scrub-slide",
          start: "-200% 80%",
          scrub: true,
        },
        x: "-1000",
      });
    }
  }, []);

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 md:mb-8 mb-4 reveal-up">What our clients say</h2>

        {/* Mobile Version: scrollable cards */}
        <div
          className="
            flex md:hidden 
            items-stretch gap-3 
            overflow-x-auto scrollbar-hide 
            -mx-4 px-4
          "
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
          }}
        >
          {reviews.map(({ content, name, company }, key) => (
            <ReviewCard key={key} name={name} company={company} content={content} />
          ))}
        </div>

        {/* Desktop Version: GSAP animated */}
        <div className="hidden md:flex scrub-slide items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
