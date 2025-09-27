import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background gradients and decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-100 to-amber-200"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-300/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-300/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-300/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Hero content */}
        <div className="relative flex flex-col items-center justify-center py-16 px-4 min-h-[85vh]">
          <div className="text-center space-y-6 mb-8 animate-fade-in">
            
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-amber-900 tracking-tight px-4 drop-shadow-sm flex items-center justify-center gap-3 relative">
              Receitinhas da Vovó
              <div className="inline-block w-12 h-12 sm:w-16 sm:h-16 relative">
                <Image
                  src="/images/vovo2.png"
                  fill
                  style={{objectFit: 'contain'}}
                  alt="Vovó Sueli"
                  className="rounded-full"
                />
                {/* Botão invisível para admin */}
                <Link
                  href="/admin"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  title="Área Administrativa"
                />
              </div>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-amber-800 tracking-wide px-4 max-w-3xl mx-auto">
              Aquele sabor de comida caseira feita com amor e tradição
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 relative overflow-hidden recipe-card-hover stagger-item animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center mb-4 bg-amber-100 rounded-full w-16 h-16 mx-auto group-hover:bg-amber-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 3a1 1 0 011-1h6a1 1 0 011 1v2H6V3zm5 4a1 1 0 10-2 0v5a1 1 0 102 0V7zm1 5a1 1 0 102 0V7a1 1 0 10-2 0v5zm-7-4a1 1 0 10-2 0v3a1 1 0 102 0V8z" clipRule="evenodd" />
                  <path d="M6 8H4v3h2V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 text-center mb-2 group-hover:text-amber-600 transition-colors duration-300">Receitas Tradicionais</h3>
              <p className="text-amber-700 text-center">Explore nossa coleção de receitas tradicionais passadas de geração em geração.</p>
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-150"></div>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 relative overflow-hidden recipe-card-hover stagger-item animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center mb-4 bg-amber-100 rounded-full w-16 h-16 mx-auto group-hover:bg-amber-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 text-center mb-2 group-hover:text-amber-600 transition-colors duration-300">Dicas da Vovó</h3>
              <p className="text-amber-700 text-center">Descubra segredos culinários e truques especiais que fazem toda a diferença.</p>
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-150"></div>
            </div>
            
            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 relative overflow-hidden recipe-card-hover stagger-item animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-center justify-center mb-4 bg-amber-100 rounded-full w-16 h-16 mx-auto group-hover:bg-amber-200 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3 3 0 015 5zm4 1V5a1 1 0 10-2 0v1H5a1 1 0 100 2h2.17a3 3 0 010-2zM9 11a1 1 0 102 0v-1h2a1 1 0 100-2h-2.17a3 3 0 010 2H9v1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 text-center mb-2 group-hover:text-amber-600 transition-colors duration-300">Categorias Variadas</h3>
              <p className="text-amber-700 text-center">De doces a salgados, encontre receitas para todas as ocasiões e gostos.</p>
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-150"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
              <Link 
                href="/recipes" 
                className="relative px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 text-lg"
              >
                <span>Explorar Receitas</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-amber-100/50 to-transparent"></div>
        <div className="absolute -top-10 right-10 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-orange-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center space-y-3 mb-12">
            <span className="inline-block px-4 py-1 bg-amber-200/50 text-amber-800 rounded-full text-sm font-medium">NOSSO DIFERENCIAL</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 text-center">Descubra Nosso Acervo de Receitas</h2>
            <p className="text-amber-700 text-center max-w-3xl mx-auto">
              Um tesouro culinário repleto de sabores autênticos e tradições familiares para você explorar e recriar em sua cozinha.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 stagger-item animate-fade-in recipe-card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner">
                <span className="text-amber-700 text-xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg text-amber-900 mb-2 text-center">Receitas Testadas</h3>
              <p className="text-amber-700 text-center">Todas as receitas são testadas e aprovadas para garantir resultados perfeitos sempre.</p>
              <div className="w-10 h-1 bg-amber-300 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 stagger-item animate-fade-in recipe-card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner">
                <span className="text-amber-700 text-xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg text-amber-900 mb-2 text-center">Ingredientes Simples</h3>
              <p className="text-amber-700 text-center">Utilizamos ingredientes fáceis de encontrar para receitas sem complicações.</p>
              <div className="w-10 h-1 bg-amber-300 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 stagger-item animate-fade-in recipe-card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner">
                <span className="text-amber-700 text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg text-amber-900 mb-2 text-center">Passo a Passo</h3>
              <p className="text-amber-700 text-center">Instruções detalhadas e claras para você seguir sem nenhuma dificuldade.</p>
              <div className="w-10 h-1 bg-amber-300 mx-auto mt-4 rounded-full"></div>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100 stagger-item animate-fade-in recipe-card-hover">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-inner">
                <span className="text-amber-700 text-xl font-bold">4</span>
              </div>
              <h3 className="font-bold text-lg text-amber-900 mb-2 text-center">Dicas Exclusivas</h3>
              <p className="text-amber-700 text-center">Segredos culinários passados por gerações para elevar o sabor das suas receitas.</p>
              <div className="w-10 h-1 bg-amber-300 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>


      
      {/* CTA Banner Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/80 to-orange-500/80"></div>
        <div className="absolute top-0 left-0 w-full h-16 bg-white/10"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-400 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            Experimente o Sabor da Tradição
          </h2>
          <p className="text-lg sm:text-xl text-amber-50 mb-10 max-w-2xl mx-auto">
            Acesse agora nossa coleção completa de receitas e descubra como preparar pratos deliciosos que encantarão toda a família.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/recipes" 
              className="px-8 py-3 bg-white text-amber-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all duration-300 text-lg"
            >
              Ver Todas as Receitas
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <div className="flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Receitas rápidas</span>
            </div>
            <div className="flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Instruções claras</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}