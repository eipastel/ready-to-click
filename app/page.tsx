"use client";

import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0.01);

  const handleClick = () => {
    setValue((prevValue) => {
      const newValue = prevValue * 2;
      return parseFloat(newValue.toFixed(2));
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#111] text-white relative overflow-x-hidden">
      {/* Scoreboard in the upper right corner */}
      <div className="fixed top-4 right-1.5 z-20 min-w-[160px] max-w-[90vw] rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg p-3 flex flex-col items-start gap-1 sm:top-6 sm:right-6 sm:min-w-[200px] sm:p-4 sm:gap-2">
        <span className="font-semibold text-xs sm:text-sm text-white mb-0.5 sm:mb-1">Latest payers</span>
        <ul className="space-y-0.5 sm:space-y-1 w-full">
          {[
            { name: "Maria Silva", lastPaid: "1h" },
            { name: "João Souza", lastPaid: "2h" },
            { name: "Lucas Lima", lastPaid: "3h" },
            { name: "Ana Paula", lastPaid: "5h" },
          ].map(({ name, lastPaid }) => (
            <li key={name} className="flex items-center gap-1 sm:gap-2 px-0.5 py-0.5">
              <span className="text-xs sm:text-xs text-white/80 font-medium truncate max-w-[70px] sm:max-w-none">{name}</span>
              <span className="text-[10px] text-gray-400 ml-auto">{lastPaid} ago</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#111] [background:radial-gradient(#222_0.5px,transparent_1px)] [background-size:10px_10px]">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30" />
      </div>
      
      <main className="relative z-10 flex w-full max-w-md flex-col items-center justify-center gap-6 sm:gap-8 px-2 sm:px-4 py-10 sm:py-16">
        <div className="absolute -top-8 -left-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-purple-500/20 blur-xl"></div>
        <div className="absolute -bottom-8 -right-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-blue-500/20 blur-xl"></div>
        
        <h1 className="mb-1 sm:mb-2 text-center text-2xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
          Welcome
        </h1>
        
        <button 
          onClick={handleClick}
          className="group cursor-pointer relative flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-px font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 w-full max-w-xs sm:max-w-none"
          aria-label="Increment value"
        >
          <span className="relative flex items-center justify-center space-x-2 rounded-lg bg-[#111] bg-opacity-90 px-6 py-3 sm:px-8 sm:py-3.5 transition-all duration-300 group-hover:bg-opacity-80 w-full">
            <span className="relative text-base font-medium">
              I'm ready to click!
            </span>
          </span>
        </button>
        
        <div className="flex items-center justify-center rounded-full bg-[#222] px-4 py-2 sm:px-6 sm:py-3">
          <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            ${value.toFixed(2)}
          </div>
        </div>
        <div className="mt-1 sm:mt-2 text-xs text-gray-400 text-center">
          Last payment 1 hour ago
        </div>
        
        <p className="text-center text-xs sm:text-sm text-gray-400">
          Every click increases the value by $0.05
        </p>
      </main>
      
      <footer className="fixed bottom-2 sm:bottom-5 flex items-center justify-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-400 w-full">
        <span>© 2025 Thiago Diogo</span>
      </footer>
    </div>
  );
}
