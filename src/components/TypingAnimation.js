import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ texts, speed = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        return;
      }

      if (!isDeleting) {
        if (currentCharIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentCharIndex > 0) {
          setDisplayText(currentText.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isDeleting, isPaused, texts, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-red-400 font-bold ml-1">|</span>
    </span>
  );
};

export default TypingAnimation; 