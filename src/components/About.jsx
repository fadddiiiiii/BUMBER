import React, { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import customerVideo from '../assets/video.mp4';


const features = [
  {
    id: "ai-1",
    title: "Kavinayaa",
    description:
      "I never realized how careless I was online until CyberBloom showed me. Now, checking in before bed is part of my routine — just like brushing my teeth. I actually look forward to the quick questions every night. The design is clean, and the tips are easy to follow.",
    link: "https://help.webflow.com/hc/en-us/articles/34205154436243",
    linkText: "Explore documentation",
    video: customerVideo,
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/6705703132e8c6c85119c96d_design-assistant.avif",
  },
  {
    id: "ai-2",
    title: "Jhalak",
    description:
      "Not gonna lie, I downloaded CyberBloom just to check it out... but now it’s part of my nightly routine. It’s lowkey like Duolingo for your online safety chill vibes, clean UI, and the tips actually make sense. I didn’t think something about cybersecurity could feel this ✨aesthetic✨..",
    link: "https://help.webflow.com/hc/articles/34295931022099",
    linkText: "Explore documentation",
    video: customerVideo,
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
  },
  {
    id: "ai-3",
    title: "Aniruth",
    description:
      "CyberBloom helped my team build better digital habits without needing an IT background. We use it in our wellness check-ins at work now. The dashboard is easy to follow, and the gamified features make it a hit with my team — it's a win for culture and security.",
    link: "https://help.webflow.com/hc/articles/34295931022099",
    linkText: "Explore documentation",
    video: customerVideo,
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
  },
];

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const index = features.findIndex((feature) => feature.id === id);
          if (index !== -1) {
            setActiveFeature(index);
            const video = document.querySelector(`video[data-feature="${id}"]`);
            if (video) video.play();
          }
        }
      });
    }, options);

    const featureElements = document.querySelectorAll(".feature-item");
    featureElements.forEach((element) => {
      observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32  gap-8">
          <div className="md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 max-w-[50rem]">
              Testimonials
            </h2>
          </div>
          <div className="mb-24">
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8">
          {/* Left Column - Video */}
          <div>
            <div className="sticky top-24">
              <div className="aspect-square rounded-lg overflow-hidden border border-white/20">
              {features.map((feature, index) => (
  <video
    key={feature.id}
    data-feature={feature.id}
    src={feature.video}
    poster={feature.poster}
    className={`w-full h-full object-cover ${
      index === activeFeature ? "block" : "hidden"
    }`}
    muted
    playsInline
    loop
    autoPlay
  />
))}

              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            {/* Intro Text */}
            <div className="md:mb-28 mb-16 md:h-72 border-b border-white/10 pb-16">
              <div className="max-w-[35ch] mb-4">
                <h3 className="text-2xl font-semibold">
                  Harita
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-[35rem]">
              I never realized how careless I was online until CyberBloom showed me. Now, checking in before bed is part of my routine  just like brushing my teeth. I actually look forward to the quick questions every night. The design is clean, and the tips are easy to follow.”

              </p>
            
            </div>

            {/* Features List */}
            <div ref={featuresRef} className="space-y-24">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="feature-item scroll-mt-24 md:h-72 border-b border-white/10 pb-16"
                >
                  <div className="max-w-[35ch] mb-4">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-[35rem]">
                    {feature.description}
                  </p>
                
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
