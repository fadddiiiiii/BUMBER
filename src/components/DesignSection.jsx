import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { HiArrowRight } from 'react-icons/hi';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';

const tabsData = [
  {
    id: 'tab1',
    title: 'Mental Wellbeing & Screen Balance',
    subtitle: 'Understand how your screen time affects your mood, focus, and energy — and get gentle nudges to restore balance when it’s needed most.',
    video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design.mp4',
    poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/670570322cf4b274d716fed4_design-without-limits.avif',
    cta: {
      text: 'Discover Designer',
      link: '/designer'
    }
  },
  {
    id: 'tab2',
    title: 'Privacy & Data Safety',
    subtitle: 'Learn how to keep your digital footprint safe. From smart tips to friendly reminders, we help you protect what matters without the stress.',
    video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/complex-rich-animations.mp4',
    poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057032ad30932a68cd9d18_animations.avif',
    cta: {
      text: 'Discover Interactions',
      link: '/interactions-animations'
    }
  },
  {
    id: 'tab3',
    title: 'Online Social Dynamics',
    subtitle: 'Reflect on your social media habits, interactions, and emotional triggers. CyberBloom helps you stay kind, connected, and in control.',
    video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/build-on-brand-sites.mp4',
    poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67058d52036e5522e27966de_build-on-brand.avif',
    cta: {
      text: 'Discover page building',
      link: '/page-building'
    }
  },
  {
    id: 'tab4',
    title: 'Willingness to Improve',
    subtitle: "Progress starts with awareness. Track your habits, set gentle goals, and celebrate the small wins — one mindful choice at a time.",
    video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/webflow-ai-assistant.mp4',
    poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/670570323f08ce0aed3368e4_ai-assistant.avif',
    cta: {
      text: 'Discover AI Assistant',
      link: '/ai'
    }
  }
];

const DesignSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const progressInterval = useRef(null);
  const highlightInterval = useRef(null);
  const PROGRESS_DURATION = 10000; // 10 seconds for each tab
  const UPDATE_INTERVAL = 100; // Update progress every 100ms
  
  const cyberBloomText = [
    "Let’s be real. In a world where we’re constantly online, taking care of our digital well-being is just as important as drinking water or getting good sleep. That’s where CyberBloom comes in — your cozy little corner of the internet designed to help you thrive, not just survive. It’s not just about safety (although we’ve got you covered there too); it’s about feeling good while being online. With daily check-ins that feel like a friendly nudge, smart suggestions that actually make sense, mindful reminders that don’t guilt trip you, and a super chill progress tracker, CyberBloom helps you bloom into your best digital self. Whether you’re doomscrolling at 2 AM (we’ve all been there), trying to focus while working from home, or just looking to vibe better with your screen time, CyberBloom makes it fun, easy, and totally doable. Because online life should lift you up, not wear you down."
  ];

  useEffect(() => {
    startProgressTimer();
    startHighlightAnimation();
    
    return () => {
      clearInterval(progressInterval.current);
      clearInterval(highlightInterval.current);
    };
  }, [activeTab]);

  const startProgressTimer = () => {
    setProgress(0);
    clearInterval(progressInterval.current);

    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Move to next tab
          const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);
          const nextIndex = (currentIndex + 1) % tabsData.length;
          setActiveTab(tabsData[nextIndex].id);
          return 0;
        }
        return prev + (UPDATE_INTERVAL / PROGRESS_DURATION * 100);
      });
    }, UPDATE_INTERVAL);
  };
  
  const startHighlightAnimation = () => {
    setHighlightIndex(0);
    clearInterval(highlightInterval.current);
    
    highlightInterval.current = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % cyberBloomText.length);
    }, 3000); // Change highlight every 3 seconds
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const video = document.querySelector(`video[data-tab="${activeTab}"]`);
    if (video) {
      if (isPlaying) {
        video.pause();
        clearInterval(progressInterval.current);
      } else {
        video.play();
        startProgressTimer();
      }
    }
  };

  return (
    <section className="overflow-hidden py-6 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-16">
        {/* Header Section - Centered */}
        <div className="max-w-4xl mx-auto text-center lg:mb-24 mb-10">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-20">
            Why CyberBloom ?
          </h2>
          
          {/* Animated highlight paragraph with improved spacing - centered */}
          <div className="space-y-6 mt-8">
            {cyberBloomText.map((text, index) => (
              <p 
                key={index}
                className={`text-xl transition-all duration-500 ${
                  index === highlightIndex 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300'
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between gap-10">
            {/* Tabs Section */}
            <div className="space-y-10">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className="relative pl-6 cursor-pointer"
                  onClick={() => handleTabClick(tab.id)}
                >
                  {/* Progress bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800">
                    {activeTab === tab.id && (
                      <div 
                        className="absolute top-0 left-0 w-full bg-blue-600 transition-all duration-100"
                        style={{ height: `${progress}%` }}
                      />
                    )}
                  </div>

                  <h3 className="text-3xl font-semibold text-white mb-2">
                    {tab.title}
                  </h3>
                  <p className={`text-gray-400 transition-all duration-300 ${
                    activeTab === tab.id ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'
                  }`}>
                    {tab.subtitle}
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

export default DesignSection;