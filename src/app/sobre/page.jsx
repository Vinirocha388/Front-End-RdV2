'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border-2 border-amber-200 shadow-lg mb-8">
            <span className="text-2xl">📖</span>
            <span className="text-sm font-bold text-amber-700 tracking-wide">NOSSA JORNADA</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent mb-6 leading-tight">
            Sobre Nós
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Uma história de amor pela culinária tradicional e pela preservação de memórias que atravessam gerações ✨
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-amber-700">DESDE 2020</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Nossa <span className="text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text">História</span>
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="pl-6 border-l-4 border-amber-300">
                  Tudo começou em <strong className="text-amber-600">2020</strong>, quando a pandemia nos trouxe de volta para a cozinha. Foi então que percebemos quantas receitas de família estavam se perdendo no tempo, guardadas apenas na memória das nossas avós.
                </p>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-200/50">
                  <p className="text-gray-800">
                    O que nasceu como um projeto pessoal para documentar as receitas da nossa família se transformou em uma missão maior: <strong className="text-orange-600">preservar o patrimônio culinário brasileiro</strong> e torná-lo acessível para futuras gerações.
                  </p>
                </div>
                
                <p>
                  Hoje, colaboramos com <strong className="text-amber-600">cozinheiras tradicionais</strong> de todo o Brasil, coletando não apenas ingredientes e modo de preparo, mas as <strong className="text-orange-600">histórias por trás de cada prato</strong>.
                </p>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-4xl font-black text-amber-600">200+</div>
                    <div className="text-sm text-gray-600 font-medium">Receitas</div>
                  </div>
                  <div className="w-px h-12 bg-amber-200"></div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-orange-600">10+</div>
                    <div className="text-sm text-gray-600 font-medium">Vovós</div>
                  </div>
                  <div className="w-px h-12 bg-amber-200"></div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-amber-600">4</div>
                    <div className="text-sm text-gray-600 font-medium">Anos</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-3xl blur-2xl"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/vovo.png"
                  alt="Nossa querida vovó"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{objectFit: 'cover'}}
                  className="hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border-2 border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👵</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Vovó Fundadora</div>
                    <div className="text-xs text-gray-600">A inspiração do projeto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-bold tracking-wide mb-6">
              NOSSOS VALORES
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Missão e <span className="text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais do que receitas, preservamos memórias e criamos conexões através do amor pela culinária tradicional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Valor 1 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-amber-100 hover:border-orange-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Autenticidade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cada receita é cuidadosamente testada e validada por quem realmente entende do assunto: as cozinheiras tradicionais.
                </p>
              </div>
            </div>

            {/* Valor 2 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-amber-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comunidade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Criamos um espaço onde avós, mães e filhas podem compartilhar conhecimento e perpetuar tradições familiares.
                </p>
              </div>
            </div>

            {/* Valor 3 */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-amber-100 hover:border-orange-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Simplicidade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Acreditamos que as melhores receitas são as mais simples, feitas com amor e ingredientes acessíveis a todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe - Desenvolvedor */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-bold tracking-wide mb-6">
              QUEM FAZ ACONTECER
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              O <span className="text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text">Criador</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a mente por trás da plataforma que une tecnologia e tradição culinária
            </p>
          </div>

          {/* Card do Desenvolvedor */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-10 md:p-12 rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full -ml-24 -mb-24 blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
                <div className="relative flex-shrink-0 group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/images/dev.png"
                      alt="Vinícius Rocha"
                      fill
                      sizes="(max-width: 768px) 224px, 256px"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                      className="hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Vinícius Rocha</h3>
                  <p className="text-blue-600 font-bold text-lg mb-6">Desenvolvedor Full-Stack & Fundador</p>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Desenvolvedor apaixonado por <strong className="text-blue-600">tecnologia e tradições culinárias</strong>. Formado em Análise e Desenvolvimento de Sistemas, com especialização em desenvolvimento web e experiência de usuário.
                    </p>
                    <p className="bg-white/60 p-4 rounded-xl border-2 border-blue-200">
                      Criou o <strong className="text-orange-600">Receitinhas da Vovó</strong> com o objetivo de preservar receitas de família e conectar gerações através do amor pela culinária caseira, combinando seu conhecimento técnico com sua paixão pela gastronomia tradicional.
                    </p>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="https://github.com/Vinirocha388" target="_blank" rel="noopener noreferrer" 
                      className="group flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span className="font-bold">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/vinicius-rocha-b12109254/" target="_blank" rel="noopener noreferrer" 
                      className="group flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="font-bold">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção das Vovós */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm font-bold tracking-wide mb-6">
              NOSSAS ESTRELAS
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Nossas Queridas <span className="text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">Colaboradoras</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As verdadeiras estrelas do nosso site: as vovós que gentilmente compartilham suas receitas e segredos culinários 💖
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Vovó Sueli */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-pink-400 to-rose-500 rounded-full overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <Image
                      src="/images/vovo2.png" 
                      alt="Vovó Sueli"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="text-xl">❤️</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Vovó Sueli</h4>
                <p className="text-pink-600 font-bold mb-4">Especialista em Doces</p>
                <p className="text-gray-700 leading-relaxed">
                  50 anos de experiência fazendo os brigadeiros e quindins mais deliciosos do bairro. Suas receitas são verdadeiros tesouros familiares.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full">
                  <span className="text-2xl">🍰</span>
                  <span className="text-sm font-bold text-pink-700">Rainha dos Doces</span>
                </div>
              </div>
            </div>

            {/* Vovó Maria */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <Image
                      src="/images/vovo3.png" 
                      alt="Vovó Maria"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="text-xl">🍲</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Vovó Maria</h4>
                <p className="text-green-600 font-bold mb-4">Mestra dos Salgados</p>
                <p className="text-gray-700 leading-relaxed">
                  Conhecida por suas coxinhas perfeitas e pão de queijo incomparável. Cada receita vem com muito carinho e histórias especiais.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                  <span className="text-2xl">🥟</span>
                  <span className="text-sm font-bold text-green-700">Mestra Salgadeira</span>
                </div>
              </div>
            </div>

            {/* Vovó Rosa */}
            <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-br from-purple-300 to-violet-300 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-violet-500 rounded-full overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                    <Image
                      src="/images/vovo4.png" 
                      alt="Vovó Rosa"
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="text-xl">🥘</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Vovó Rosa</h4>
                <p className="text-purple-600 font-bold mb-4">Rainha da Comida Nordestina</p>
                <p className="text-gray-700 leading-relaxed">
                  Traz toda a tradição e sabor do Nordeste brasileiro. Suas moquecas e bobós são simplesmente inesquecíveis.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
                  <span className="text-2xl">🌶️</span>
                  <span className="text-sm font-bold text-purple-700">Sabor Nordestino</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mensagem de agradecimento */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 via-rose-100 to-orange-100 text-gray-800 px-8 py-4 rounded-2xl shadow-lg border-2 border-pink-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-lg">Nosso eterno agradecimento a todas as vovós colaboradoras!</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-300/30 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <span className="text-3xl">🎉</span>
            <span className="text-white font-bold">Junte-se a Nós</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Faça Parte da Nossa<br />Família Culinária
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubra receitas que carregam história, sabor e muito amor. Conecte-se com tradições que atravessam gerações.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/recipes" 
              className="group inline-flex items-center justify-center px-10 py-5 bg-white text-orange-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg"
            >
              <span className="flex items-center gap-2">
                Explorar Receitas
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            
            <Link 
              href="/contato" 
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-orange-600 transition-all duration-300 text-lg"
            >
              Entre em Contato
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold">Acesso Gratuito</div>
                <div className="text-sm text-white/80">Todas as receitas</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold">Feito com Amor</div>
                <div className="text-sm text-white/80">Tradição e carinho</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold">Receitas Testadas</div>
                <div className="text-sm text-white/80">Garantia de sucesso</div>
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}