import React from 'react';
import { Fish, Anchor, Waves } from 'lucide-react';

interface HomePageProps {
  onStartQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Petambak Seperti Apa Kamu?
      </h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Fish className="w-16 h-16 text-blue-500" />
        <Anchor className="w-16 h-16 text-red-500" />
        <Fish className="w-16 h-16 text-green-500" />
      </div>
      <button
        onClick={onStartQuiz}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Ayo Cari Tahu!
      </button>
      <Waves className="w-full h-24 text-blue-300 mt-8" />
    </div>
  );
};

export default HomePage;