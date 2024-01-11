import React, { useEffect, useState } from 'react';
import schol from "../../assets/images/school.svg"; 
import './Page.css'; // Import your CSS file

const TypewriterText: React.FC<{ text?: string; onAnimationComplete: () => void }> = ({ text = '', onAnimationComplete }) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (text.trim() === '') {
      setIsAnimating(false);
      onAnimationComplete();
      return;
    }

    setIsAnimating(true);

    const intervalId = setInterval(() => {
      setDisplayText((prev) => {
        if (currentIndex >= text.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setIsAnimating(false);
            onAnimationComplete();
          }, 1000); // Delay after completing the text
          return prev;
        }

        return prev + text[currentIndex];
      });
      setCurrentIndex((prev) => prev + 1);
    }, 100); // Delay between letters

    return () => clearInterval(intervalId);
  }, [text, currentIndex, onAnimationComplete]);

  return <span>{displayText}</span>;
};

const Page: React.FC = () => {
  const [isHeadingComplete, setIsHeadingComplete] = useState<boolean>(false);

  const handleHeadingComplete = () => {
    setIsHeadingComplete(true);
  };

  const restartAnimation = () => {
    setIsHeadingComplete(false);
  };

  useEffect(() => {
    // Trigger the animation on component mount
    restartAnimation();
  }, []);

  return (
    <div className='grid grid-cols-7'>
      <div className="col-span-4 flex items-center justify-center" style={{ height: "88vh" }}>
        <div className="grid grid-cols-1 items-center justify-end gap-12" style={{ width: "780px" }}>
          <h1 className='text-white font-bold text-7xl'>
            <TypewriterText text="School Management System" onAnimationComplete={handleHeadingComplete} />
          </h1>
          {isHeadingComplete && (
            <p className='text-white font-bold w-96'>
              <TypewriterText text="Easily Manage Your school anywhere anytime as fast as possible with our system" onAnimationComplete={restartAnimation} />
            </p>
          )}
          <button className='w-56 rounded-full h-16 text-white font-bold' style={{ background: "#EE780B" }}>Get Started</button>
        </div>
      </div>
      <div className="col-span-3 flex items-center">
        <img src={schol} alt="" className='animated-image' style={{ height: "500px", width: "100%" }} />
      </div>
    </div>
  );
};

export default Page;
