'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-orange-200/25 to-amber-200/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center py-20 px-4 min-h-[90vh]">
          <div className="text-center space-y-8 mb-12 max-w-5xl animate-fade-in">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent tracking-tight leading-tight drop-shadow-sm animate-fade-in">
              Receitinhas da Vovó
              <div className="inline-flex items-center justify-center ml-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <Image
                  src="/images/vovo2.png"
                  width={96}
                  height={96}
                  alt="Vovó Sueli"
                  className="relative rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
                <Link
                  href="/admin"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  title="Área Administrativa"
                />
              </div>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide px-4 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Sabor de comida caseira feita com 
              <span className="text-transparent bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text"> amor </span> 
              e tradição ✨
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600">200+</div>
                <div className="text-sm text-gray-600 font-medium">Receitas</div>
              </div>
              <div className="w-px h-12 bg-amber-200"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600">70+</div>
                <div className="text-sm text-gray-600 font-medium">Anos de tradição</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link 
              href="/recipes" 
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2 text-lg">
                Explorar Receitas
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            
            <Link 
              href="/sobre" 
              className="px-8 py-4 bg-white text-amber-600 font-bold rounded-2xl shadow-lg hover:shadow-xl border-2 border-amber-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="flex items-center gap-2 text-lg">
                Conheça Nossa História
              </span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-amber-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-bold tracking-wide">
              POR QUE ESCOLHER
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              O Melhor da Culinária <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text">Caseira</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra o que torna nossas receitas especiais e únicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-100 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Receitas Testadas</h3>
                <p className="text-gray-700 leading-relaxed">Todas aprovadas e garantidas para resultar em pratos deliciosos que vão impressionar.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border-2 border-orange-100 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Dicas da Vovó</h3>
                <p className="text-gray-700 leading-relaxed">Segredos culinários passados de geração em geração para elevar suas receitas.</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-100 hover:border-orange-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Passo a Passo</h3>
                <p className="text-gray-700 leading-relaxed">Instruções claras e detalhadas para você seguir sem nenhuma dificuldade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-bold tracking-wide">
              COMO FUNCIONA
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              Simples, Rápido e <span className="text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">Delicioso</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 -z-10"></div>
            
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10 border-4 border-white">
                <span className="text-3xl font-black text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Escolha</h3>
              <p className="text-gray-600">Navegue pelo acervo e encontre a receita perfeita</p>
            </div>
            
            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10 border-4 border-white">
                <span className="text-3xl font-black text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prepare</h3>
              <p className="text-gray-600">Separe os ingredientes listados na receita</p>
            </div>
            
            {/* Step 3 */}
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10 border-4 border-white">
                <span className="text-3xl font-black text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cozinhe</h3>
              <p className="text-gray-600">Siga o passo a passo detalhado</p>
            </div>
            
            {/* Step 4 */}
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10 border-4 border-white">
                <span className="text-3xl font-black text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Saboreie</h3>
              <p className="text-gray-600">Aproveite com a família e amigos!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="relative py-24 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-400/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <span className="text-4xl">👩‍🍳</span>
            <span className="text-white font-bold">Comece Agora</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Pronto Para Criar<br />Momentos Deliciosos?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de pessoas que já descobriram o prazer de cozinhar com nossas receitas tradicionais
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/recipes" 
              className="group px-10 py-5 bg-white text-amber-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
            >
              <span className="flex items-center gap-2">
                Ver Todas as Receitas
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Receitas Rápidas</div>
                <div className="text-sm text-white/70">Prontas em minutos</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Passo a Passo</div>
                <div className="text-sm text-white/70">Fácil de seguir</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Feito com Amor</div>
                <div className="text-sm text-white/70">Tradição e carinho</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}