
import React, { useState, useCallback } from 'react';
import { GameState } from './types';
import { fetchWords } from './services/geminiService';
import StartScreen from './components/StartScreen';
import TestScreen from './components/TestScreen';
import EndScreen from './components/EndScreen';

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.Idle);
  const [words, setWords] = useState<string[]>([]);

  const handleStart = useCallback(() => {
    setGameState(GameState.Loading);
    
    // The word generation is now synchronous and very fast.
    // We set the loading state first, then immediately generate words and
    // set the running state. React will batch these updates efficiently.
    const newWords = fetchWords();
    setWords(newWords);
    setGameState(GameState.Running);
  }, []);

  const handleFinish = useCallback(() => {
    setGameState(GameState.Finished);
  }, []);

  const handleRestart = useCallback(() => {
    setWords([]);
    setGameState(GameState.Idle);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Running:
        return <TestScreen words={words} onFinish={handleFinish} />;
      case GameState.Finished:
        return <EndScreen onRestart={handleRestart} />;
      case GameState.Loading:
        // This case will likely only show for a fraction of a second.
        return <StartScreen onStart={handleStart} loading={true} />;
      case GameState.Idle:
      default:
        return <StartScreen onStart={handleStart} loading={false} />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full h-screen max-w-5xl bg-gray-800 rounded-2xl shadow-2xl shadow-indigo-900/20 border border-gray-700">
        {renderContent()}
      </div>
    </main>
  );
}

export default App;
