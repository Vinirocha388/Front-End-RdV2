"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Inicia contagem regressiva para redirecionamento
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Inicia a animação de fade-out antes do redirecionamento
      setIsRedirecting(true);
      setTimeout(() => {
        router.push('/');
      }, 500); // Espera a animação terminar
    }
  }, [countdown, router]);

  return (
    <div className={`flex items-center justify-center min-h-[calc(100vh-150px)] p-5 bg-gray-50 animate-[fadeIn_0.5s_ease-in-out] ${isRedirecting ? 'opacity-0 transition-opacity duration-500' : ''}`}>
      <div className="max-w-[600px] text-center bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <h1 className="text-8xl font-extrabold text-[#ff9f43] m-0 leading-none shadow-[3px_3px_0_rgba(255,159,67,0.2)]">404</h1>
        
        <div className="relative my-8 h-[120px] w-full">
          <div className="absolute w-[100px] h-[80px] bg-[#ff9f43] rounded-b-[50%] left-1/2 -translate-x-1/2 bottom-0 overflow-visible shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
            <div className="absolute w-[120px] h-[20px] bg-[#2a2a2a] rounded-md top-[-10px] left-1/2 -translate-x-1/2"></div>
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[8px] h-[20px] bg-[#f0f0f0] rounded-[10px] opacity-0 animate-[steamAnimation_2s_infinite_ease-in-out] before:content-[''] before:absolute before:w-[8px] before:h-[20px] before:bg-[#f0f0f0] before:rounded-[10px] before:left-[-15px] before:top-[-5px] before:animate-[steamAnimation_2s_infinite_ease-in-out_0.3s] after:content-[''] after:absolute after:w-[8px] after:h-[20px] after:bg-[#f0f0f0] after:rounded-[10px] after:right-[-15px] after:top-[-10px] after:animate-[steamAnimation_2s_infinite_ease-in-out_0.6s]">
            </div>
          </div>
          <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 w-12 h-12 opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f97316" className="animate-bounce">
              <path d="M12.71 2.29a1 1 0 00-1.42 0l-9 9a1 1 0 001.42 1.42L12 4.41l8.29 8.3a1 1 0 001.42-1.42l-9-9zM12 6.83L4.83 14H15a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-1a1 1 0 10-2 0v1a4 4 0 004 4h6a4 4 0 004-4v-4a4 4 0 00-4-4h-2.17L12 6.83z"/>
            </svg>
          </div>
        </div>
        
        <h2 className="text-[2.5rem] text-gray-800 mb-5">Ooops! Página não encontrada</h2>
        <div aria-live="polite" role="status" className="my-6 text-base text-gray-500">
          Redirecionando para a página inicial em <span className="inline-block w-[30px] h-[30px] leading-[30px] text-center bg-[#ff9f43] text-white rounded-full font-bold mx-1 animate-[pulse_1s_infinite]">{countdown}</span> segundos...
        </div>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Parece que esta receita ainda não foi inventada! 
          <span className="block mt-2 font-medium">A página que você está procurando não existe ou foi removida.</span>
        </p>
        
        <div className="bg-gray-50 border-l-4 border-[#ff9f43] py-4 px-5 text-left my-8 rounded-r-md">
          <p className="font-semibold mb-2.5 text-gray-800">Você pode tentar:</p>
          <ul className="list-none pl-0">
            <li className="relative pl-6 mb-2 leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-[#ff9f43] before:font-bold">Verificar se digitou o endereço corretamente</li>
            <li className="relative pl-6 mb-2 leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-[#ff9f43] before:font-bold">Explorar nossas deliciosas receitas na página inicial</li>
            <li className="relative pl-6 mb-2 leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-[#ff9f43] before:font-bold">Procurar por uma receita específica usando a pesquisa</li>
          </ul>
        </div>
        
        <div className="flex gap-4 justify-center mt-8 md:flex-row flex-col">
          <Link href="/" className="px-6 py-3 rounded-md font-semibold bg-[#ff9f43] text-white border-none transition-all duration-300 ease-in-out hover:bg-[#ff8a00] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(255,159,67,0.3)]">
            Ir para a Página Inicial
          </Link>
          <Link href="/recipes" className="px-6 py-3 rounded-md font-semibold bg-transparent text-[#ff9f43] border-2 border-[#ff9f43] transition-all duration-300 ease-in-out hover:bg-[rgba(255,159,67,0.1)] hover:-translate-y-0.5">
            Explorar Receitas
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes steamAnimation {
          0% {
            transform: translateY(0) translateX(-50%) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-30px) translateX(-50%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}