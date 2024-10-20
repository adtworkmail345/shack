import React from 'react';
import { Fish, Anchor, Waves } from 'lucide-react';

interface HomePageProps {
  onStartQuiz: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen relative bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        PETAMBAK<br/> SEPERTI <br/> APA KAMU ?
      </h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* <Fish className="w-16 h-16 text-blue-500" />
        <Anchor className="w-16 h-16 text-red-500" />
        <Fish className="w-16 h-16 text-green-500" /> */}
        <img src="/image/1.png"/>
        <img src="/image/2.png"/>
        <img src="/image/3.png"/>
        <img src="/image/4.png"/>
        <img src="/image/5.png"/>
        <img src="/image/6.png"/>
      </div>
      <button
        onClick={onStartQuiz}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Ayo Cari Tahu!
      </button>
      {/* <Waves className="w-full h-24 text-blue-300 mt-8" /> */}
      {/* <img src="/image/footer.png" className="absolute bottom-0-inset-x-0"/> */}
      {/* Footer */}
      {/* versi mobile */}
      <footer className="w-full absolute bottom-0">
        <img src="/image/footer.png" className="w-full" alt="Footer" />
      </footer>

      {/* versi website */}
      {/* <footer className="w-full">
        <img src="/image/footer.png" className="w-full h-auto" alt="Footer" />
      </footer> */}
      </div>
  );
};

export default HomePage;