"use client";
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-amber-50 to-orange-50 text-gray-800 py-16 pb-6 mt-16 border-t-2 border-amber-200/50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Coluna 1: Sobre */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Receitinhas da Vovó
              </h3>
            </div>
            <p className="leading-relaxed text-gray-700 text-[0.95rem]">
              Compartilhando sabores e memórias através de receitas caseiras tradicionais 
              que trazem o aconchego e o carinho da cozinha da vovó. ✨
            </p>
          </div>
          
          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></div>
              <h4 className="text-lg font-bold text-gray-800">Links Rápidos</h4>
            </div>
            <ul className="list-none p-0 m-0 space-y-3">
              <li className="group">
                <Link href="/" className="flex items-center gap-2 text-gray-700 no-underline transition-all duration-300 hover:text-orange-600 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></span>
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/recipes" className="flex items-center gap-2 text-gray-700 no-underline transition-all duration-300 hover:text-orange-600 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></span>
                  <span className="font-medium">Todas as Receitas</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/sobre" className="flex items-center gap-2 text-gray-700 no-underline transition-all duration-300 hover:text-orange-600 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></span>
                  <span className="font-medium">Sobre Nós</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/politicas-de-privacidade" className="flex items-center gap-2 text-gray-700 no-underline transition-all duration-300 hover:text-orange-600 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></span>
                  <span className="font-medium">Política de Privacidade</span>
                </Link>
              </li>
              <li className="group">
                <Link href="/termos-de-uso" className="flex items-center gap-2 text-gray-700 no-underline transition-all duration-300 hover:text-orange-600 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full group-hover:bg-orange-500 transition-colors duration-300"></span>
                  <span className="font-medium">Termos de Uso</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-amber-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-amber-50 to-orange-50 px-4 text-2xl">
              🍪
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-3">
          <p className="text-sm text-gray-600 font-medium">
            &copy; {currentYear} <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-bold">Receitinhas da Vovó</span> - Todos os direitos reservados
          </p>
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            Feito com 
            <span className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br from-red-400 to-pink-500 rounded-full animate-heartbeat shadow-lg">
              <span className="text-white text-sm">&hearts;</span>
            </span> 
            e muito café ☕
          </p>
          <div className="flex items-center justify-center gap-4 pt-2 text-xs text-gray-500">
            <span>Valinhos, SP 🇧🇷</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
          50% { transform: scale(1.05); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;