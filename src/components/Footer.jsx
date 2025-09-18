"use client";
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 py-12 pb-6 mt-12 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-[#ff9f43] text-2xl mb-4 font-bold">Receitinhas da Vovó</h3>
            <p className="leading-relaxed mb-6 text-gray-700">
              Compartilhando sabores e memórias através de receitas caseiras tradicionais 
              que trazem o aconchego e o carinho da cozinha da vovó.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 text-2xl transition-colors duration-300 hover:text-[#ff9f43]">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 text-2xl transition-colors duration-300 hover:text-[#ff9f43]">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-600 text-2xl transition-colors duration-300 hover:text-[#ff9f43]">
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[#ff9f43] text-lg mb-4 font-semibold">Links Rápidos</h4>
            <ul className="list-none p-0 m-0">
              <li className="mb-2"><Link href="/" className="text-gray-700 no-underline transition-colors duration-300 hover:text-[#ff9f43] hover:underline">Home</Link></li>
              <li className="mb-2"><Link href="/recipes" className="text-gray-700 no-underline transition-colors duration-300 hover:text-[#ff9f43] hover:underline">Todas as Receitas</Link></li>
              <li className="mb-2"><Link href="/about" className="text-gray-700 no-underline transition-colors duration-300 hover:text-[#ff9f43] hover:underline">Sobre Nós</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-gray-700 no-underline transition-colors duration-300 hover:text-[#ff9f43] hover:underline">Contato</Link></li>
              <li className="mb-2"><Link href="/privacy-policy" className="text-gray-700 no-underline transition-colors duration-300 hover:text-[#ff9f43] hover:underline">Política de Privacidade</Link></li>
              <li className="mb-2"><Link href="/terms" className="text-gray-700 no-underline transition-colors duration-300 hover:text-[#ff9f43] hover:underline">Termos de Uso</Link></li>
            </ul>
          </div>


        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Receitinhas da Vovó - Todos os direitos reservados</p>
          <p>Feito com <span className="text-[#e74c3c] text-lg inline-block animate-heartbeat">&hearts;</span> e muito café</p>
        </div>
        <style jsx>{`
          @keyframes heartbeat {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;