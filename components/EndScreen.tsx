
import React from 'react';

interface EndScreenProps {
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ onRestart }) => {
  return (
    <div className="text-center p-8 flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-green-400">Test Completed!</h1>
      <p className="text-lg text-gray-300 mb-8">
        Great work. Consistent practice is the key to success.
      </p>
      <button
        onClick={onRestart}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
      >
        Practice Again
      </button>
    </div>
  );
};

export default EndScreen;
