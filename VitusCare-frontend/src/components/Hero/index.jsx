import React, { useState, useEffect } from 'react';
import VideoModal from '../VideoModal';
import FunFactSection from '../Section/FunFactSection';
import Section from '../Section';
import ControlledCarousel from '../Carousel/ControlledCarousel';

const funFactData = [
  { number: '50+', title: 'Operational Centres' },
  { number: '25,000', title: 'Satisfied Patients' },
  { number: '5,50,000', title: 'Sessions Completed' },
];

export default function Hero({
  title = '',
  subTitle = '',
  imgUrl,
  videoBtnText,
  videoUrl,
  btnText,
  btnUrl,
}) {
  const words = ["Affordable.", "Accessible.", "Available."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingDelay = 2000; // Typing animation duration
    const eraseDelay = 1000; // Erasing animation duration
    const delay = isTyping ? typingDelay : eraseDelay;

    const timer = setTimeout(() => {
      if (isTyping) {
        setIsTyping(false); // Switch to erasing after typing completes
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true); // Switch back to typing after erasing
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [isTyping, currentWordIndex, words.length]);

  return (
    <>
      <section className="cs_hero cs_style_1">
        <div style={{ height: "100vh" }}>
          <ControlledCarousel />
          <div className="cs_hero_text">
            <h1
              className={`cs_hero_title cs_fs_94 ${window.innerWidth <= 500 ? "mobile" : ""
                }`}
              style={{ color: "white" }}
            >
              Making Quality Dialysis{" "}
              <span
                className="typing-text"
                style={{
                  animation: isTyping
                    ? "typing 2s steps(20, end) forwards"
                    : "erasing 1s steps(20, end) forwards",
                }}
              >
                {words[currentWordIndex]}
              </span>
            </h1>
            <div
              className="cs_hero_btn_wrap"
              style={{
                position: window.innerWidth <= 500 ? "relative" : "absolute",
                left: window.innerWidth <= 500 ? "30%" : "250px",
                bottom: window.innerWidth <= 500 ? "50px" : "300px",
                transform: window.innerWidth <= 500 ? "translateX(-50%)" : "none",
              }}
            >
              <VideoModal
                videoUrl={videoUrl}
                videoBtnText={videoBtnText}
                variant="cs_heading_color red_blue"
              />
            </div>
          </div>
        </div>
      </section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
    </>
  );
}
