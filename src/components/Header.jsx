"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-[1000] w-full transition-all duration-300 border-b-2 border-amber-200/50">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-transparent pointer-events-none"></div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 sm:px-4 flex justify-between items-center h-[85px] sm:h-[65px] transition-all duration-300 relative">
        <div className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
          <Link href="/" className="flex items-center text-inherit no-underline transition-all duration-300 group">
            <div className="relative w-[50px] h-[50px] sm:w-[38px] sm:h-[38px] mr-3.5 sm:mr-2.5 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-1.5 border-2 border-amber-300/60 group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-amber-200/50 transition-all duration-300">
              <Image
                src="/images/icon.png"
                alt="Receitinhas da Vovó"
                width={50}
                height={50}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
            <div>
              <h1 className="text-[1.6rem] sm:text-[1.25rem] font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent m-0 transition-all duration-300 leading-tight">
                Receitinhas da Vovó
              </h1>
              <p className="text-gray-600 text-[0.7rem] -mt-0.5 hidden md:block font-medium tracking-wide">Sabor e tradição em cada receita ✨</p>
            </div>
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <nav>
            <ul className="flex list-none m-0 p-0 gap-1">
              <li className="m-0">
                <Link href="/" className="group flex items-center gap-2 px-4 py-2.5 text-gray-700 no-underline font-semibold transition-all duration-300 text-[0.95rem] relative rounded-xl hover:text-orange-600 hover:bg-amber-50/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
              </li>
              <li className="m-0">
                <Link href="/sobre" className="group flex items-center gap-2 px-4 py-2.5 text-gray-700 no-underline font-semibold transition-all duration-300 text-[0.95rem] relative rounded-xl hover:text-orange-600 hover:bg-amber-50/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sobre Nós
                </Link>
              </li>
              <li className="m-0">
                <Link href="/recipes" className="group flex items-center gap-2 px-4 py-2.5 text-gray-700 no-underline font-semibold transition-all duration-300 text-[0.95rem] relative rounded-xl hover:text-orange-600 hover:bg-amber-50/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Receitas
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login Desktop */}
          <Link href="/login" className="group relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300/60 transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-amber-200/50 hover:scale-105" title="Fazer Login">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 group-hover:text-orange-600 transition-all duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white animate-pulse"></span>
          </Link>
        </div>

        {/* Mobile: Login + Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <Link href="/login" className="group relative flex items-center justify-center w-[38px] h-[38px] sm:w-[34px] sm:h-[34px] rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300/60 transition-all duration-300 hover:border-orange-400 hover:shadow-md" title="Fazer Login">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600 group-hover:text-orange-600 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></span>
          </Link>

          <button 
            className="bg-transparent border-none cursor-pointer w-[38px] h-[38px] sm:w-[34px] sm:h-[34px] relative flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <div className={`relative w-full h-full overflow-hidden rounded-xl transition-all duration-300 flex items-center justify-center group ${isMobileMenuOpen ? 'bg-orange-100' : 'hover:bg-amber-50'}`}>
              <div className="relative w-6 h-6 flex flex-col items-center justify-center">
                <span className={`absolute w-5 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 shadow-sm ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`absolute w-5 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 shadow-sm ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                <span className={`absolute w-5 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 shadow-sm ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm lg:hidden" onClick={toggleMobileMenu}>
            <nav 
              className="absolute top-[85px] sm:top-[65px] right-0 w-[88%] max-w-[340px] h-[calc(100vh-85px)] sm:h-[calc(100vh-65px)] bg-white shadow-2xl py-6 z-[999] origin-top-right animate-[slideIn_0.3s_ease_forwards] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 pb-6 mb-6 border-b-2 border-gradient-to-r from-amber-100 to-orange-100">
                <h3 className="text-amber-600 text-xs uppercase font-bold tracking-widest flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></span>
                  Menu
                </h3>
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 px-4">
                <li className="m-0">
                  <Link 
                    href="/" 
                    onClick={toggleMobileMenu} 
                    className="flex items-center py-4 px-4 text-gray-800 no-underline font-semibold text-base rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:shadow-md group"
                  >
                    <span className="flex items-center justify-center w-10 h-10 mr-3.5 text-amber-600 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl transition-all duration-200 group-hover:scale-110 group-hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </span>
                    <span className="group-hover:text-orange-600 transition-colors duration-200">Home</span>
                  </Link>
                </li>
                <li className="m-0">
                  <Link 
                    href="/sobre" 
                    onClick={toggleMobileMenu} 
                    className="flex items-center py-4 px-4 text-gray-800 no-underline font-semibold text-base rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:shadow-md group"
                  >
                    <span className="flex items-center justify-center w-10 h-10 mr-3.5 text-amber-600 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl transition-all duration-200 group-hover:scale-110 group-hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="group-hover:text-orange-600 transition-colors duration-200">Sobre Nós</span>
                  </Link>
                </li>
                <li className="m-0">
                  <Link 
                    href="/recipes" 
                    onClick={toggleMobileMenu} 
                    className="flex items-center py-4 px-4 text-gray-800 no-underline font-semibold text-base rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:shadow-md group"
                  >
                    <span className="flex items-center justify-center w-10 h-10 mr-3.5 text-amber-600 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl transition-all duration-200 group-hover:scale-110 group-hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </span>
                    <span className="group-hover:text-orange-600 transition-colors duration-200">Receitas</span>
                  </Link>
                </li>
                <li className="m-0 mt-4 pt-4 border-t-2 border-gradient-to-r from-amber-100 to-orange-100">
                  <Link 
                    href="/login"
                    onClick={toggleMobileMenu} 
                    className="flex items-center w-full py-4 px-4 text-gray-800 no-underline font-semibold text-base rounded-xl transition-all duration-200 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 hover:shadow-lg group border-2 border-amber-200/50"
                  >
                    <span className="flex items-center justify-center w-10 h-10 mr-3.5 text-white bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <span className="group-hover:text-orange-600 transition-colors duration-200">Fazer Login</span>
                  </Link>
                </li>
              </ul>
              <div className="absolute bottom-0 left-0 w-full py-5 px-6 bg-gradient-to-t from-amber-50/50 to-transparent border-t-2 border-amber-100">
                <div className="text-center text-xs font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Receitinhas da Vovó © 2024
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </header>
  );
}