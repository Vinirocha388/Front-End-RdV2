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
    <header className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-[1000] w-full transition-all duration-300 border-b border-amber-100">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200"></div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-4 flex justify-between items-center h-[80px] sm:h-[60px] transition-all duration-300">
        <div className="flex items-center transition-transform duration-300">
          <Link href="/" className="flex items-center text-inherit no-underline transition-all duration-300 hover:scale-[1.03] group">
            <div className="relative w-[45px] h-[45px] sm:w-[35px] sm:h-[35px] mr-3 sm:mr-2 overflow-hidden rounded-full bg-amber-50 p-1 border-2 border-amber-200 group-hover:border-[#ff9f43] transition-all duration-300">
              <Image
                src="/images/icon.png"
                alt="Receitinhas da Vovó"
                width={45}
                height={45}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <h1 className="text-[1.5rem] sm:text-[1.2rem] font-bold bg-gradient-to-r from-amber-500 to-[#ff9f43] bg-clip-text text-transparent m-0 transition-all duration-300">Receitinhas da Vovó</h1>
              <p className="text-gray-500 text-xs -mt-1 hidden md:block">Sabor e tradição em cada receita</p>
            </div>
          </Link>
        </div>

        {/* Menu para tela grande (visível apenas em desktop) */}
        <nav className="hidden lg:flex">
          <ul className="flex list-none m-0 p-0 gap-8">
            <li className="m-0 relative">
              <Link href="/" className="group flex items-center text-gray-700 no-underline font-medium transition-colors duration-300 text-base relative hover:text-[#ff9f43]">
                <span className="mr-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400 group-hover:text-[#ff9f43] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                Home
                <span className="absolute -bottom-[3px] left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-[#ff9f43] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="m-0 relative">
              <Link href="/about" className="group flex items-center text-gray-700 no-underline font-medium transition-colors duration-300 text-base relative hover:text-[#ff9f43]">
                <span className="mr-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400 group-hover:text-[#ff9f43] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Sobre Nós
                <span className="absolute -bottom-[3px] left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-[#ff9f43] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
            <li className="m-0 relative">
              <Link href="/contact" className="group flex items-center text-gray-700 no-underline font-medium transition-colors duration-300 text-base relative hover:text-[#ff9f43]">
                <span className="mr-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400 group-hover:text-[#ff9f43] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Contato
                <span className="absolute -bottom-[3px] left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-[#ff9f43] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão do menu mobile (visível apenas em mobile) */}
        <button 
          className="lg:hidden bg-transparent border-none cursor-pointer w-[35px] h-[35px] sm:w-[30px] sm:h-[30px] relative flex items-center justify-center"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <div className="relative w-full h-full overflow-hidden rounded-md hover:bg-amber-50 transition-colors duration-300 flex items-center justify-center group">
            <span className={`absolute w-[22px] h-[2px] bg-[#ff9f43] rounded-[5px] transition-all duration-300 shadow-sm
              ${isMobileMenuOpen ? 'bg-transparent' : 'before:content-[""] before:absolute before:w-[22px] before:h-[2px] before:bg-[#ff9f43] before:rounded-[5px] before:shadow-sm before:transition-all before:duration-300 before:transform before:-translate-y-[6px] after:content-[""] after:absolute after:w-[22px] after:h-[2px] after:bg-[#ff9f43] after:rounded-[5px] after:shadow-sm after:transition-all after:duration-300 after:transform after:translate-y-[6px]'}
              ${isMobileMenuOpen && 'before:transform before:rotate-45 before:translate-y-0 after:transform after:rotate-[-45deg] after:translate-y-0'}`}>
            </span>
          </div>
        </button>

        {/* Menu mobile (exibido apenas quando aberto) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[998] bg-black/20 backdrop-blur-sm lg:hidden" onClick={toggleMobileMenu}>
            <nav 
              className="absolute top-[80px] sm:top-[60px] right-0 w-[85%] max-w-[320px] h-screen bg-white shadow-xl py-4 z-[999] origin-top-right animate-[slideIn_0.3s_ease_forwards] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 pb-6 mb-4 border-b border-gray-100">
                <h3 className="text-gray-400 text-xs uppercase font-semibold tracking-wider">Menu de Navegação</h3>
              </div>
              <ul className="list-none m-0 p-0 flex flex-col px-4">
                <li className="m-0 relative">
                  <Link 
                    href="/" 
                    onClick={toggleMobileMenu} 
                    className="flex items-center py-4 px-3 text-gray-800 no-underline font-medium text-base rounded-lg transition-colors duration-200 hover:bg-amber-50 group"
                  >
                    <span className="flex items-center justify-center w-8 h-8 mr-3 text-amber-500 bg-amber-100 rounded-lg transition-colors duration-200 group-hover:bg-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </span>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="m-0 relative">
                  <Link 
                    href="/about" 
                    onClick={toggleMobileMenu} 
                    className="flex items-center py-4 px-3 text-gray-800 no-underline font-medium text-base rounded-lg transition-colors duration-200 hover:bg-amber-50 group"
                  >
                    <span className="flex items-center justify-center w-8 h-8 mr-3 text-amber-500 bg-amber-100 rounded-lg transition-colors duration-200 group-hover:bg-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span>Sobre Nós</span>
                  </Link>
                </li>
                <li className="m-0 relative">
                  <Link 
                    href="/contact" 
                    onClick={toggleMobileMenu} 
                    className="flex items-center py-4 px-3 text-gray-800 no-underline font-medium text-base rounded-lg transition-colors duration-200 hover:bg-amber-50 group"
                  >
                    <span className="flex items-center justify-center w-8 h-8 mr-3 text-amber-500 bg-amber-100 rounded-lg transition-colors duration-200 group-hover:bg-amber-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span>Contato</span>
                  </Link>
                </li>
              </ul>
              <div className="absolute bottom-0 left-0 w-full py-4 px-6 bg-white border-t border-gray-100">
                <div className="text-center text-xs text-gray-500">Receitinhas da Vovó ©</div>
              </div>
            </nav>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}