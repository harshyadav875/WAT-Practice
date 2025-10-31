
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
  loading: boolean;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, loading }) => {
  return (
    <div className="text-center p-8 flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-indigo-400">AFSB WAT Practice</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        Welcome! This tool will help you practice for the Word Association Test.
        You will be shown 60 words in sequence. Each word will be displayed for 15 seconds.
      </p>
      <button
        onClick={onStart}
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 flex items-center"
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Words...
          </>
        ) : (
          'Start Test'
        )}
      </button>
    </div>
  );
};

export default StartScreen;
