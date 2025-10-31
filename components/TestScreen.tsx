
import React, { useState, useEffect, useCallback } from 'react';
import { useBeep } from '../hooks/useBeep';
import ProgressBar from './ProgressBar';

interface TestScreenProps {
  words: string[];
  onFinish: () => void;
}

const TestScreen: React.FC<TestScreenProps> = ({ words, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { playBeep } = useBeep();

  const nextWord = useCallback(() => {
    if (currentIndex < words.length - 1) {
      playBeep();
      setCurrentIndex(prev => prev + 1);
    } else {
      onFinish();
    }
  }, [currentIndex, words.length, onFinish, playBeep]);
  
  if (words.length === 0) {
    return <div>Loading words...</div>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 flex flex-col items-center justify-center h-full text-center">
      <div className="w-full mb-8">
        <p className="text-xl text-gray-400 mb-4">
          Word {currentIndex + 1} of {words.length}
        </p>
        <ProgressBar key={currentIndex} duration={15} onComplete={nextWord} />
      </div>
      <div className="flex-grow flex items-center justify-center">
         <h2 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-wider uppercase text-indigo-300">
            {words[currentIndex]}
         </h2>
      </div>
      <div className="h-20"></div> {/* Spacer to balance layout */}
    </div>
  );
};


export default TestScreen;
