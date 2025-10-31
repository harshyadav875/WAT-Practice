
import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  duration: number;
  onComplete: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, onComplete }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - (100 / (duration * 10)); // Update every 100ms
        if (newProgress <= 0) {
          clearInterval(interval);
          onComplete();
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);


  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
      <div
        className="bg-indigo-500 h-2.5 rounded-full transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
