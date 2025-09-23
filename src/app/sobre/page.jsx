import Image from 'next/image';
import Link from 'next/link';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
     

      {/* Nossa História */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Tudo começou em 2020, quando a pandemia nos trouxe de volta para a cozinha. Foi então que percebemos quantas receitas de família estavam se perdendo no tempo, guardadas apenas na memória das nossas avós.
                </p>
                <p>
                  O que nasceu como um projeto pessoal para documentar as receitas da nossa família se transformou em uma missão maior: <strong className="text-gray-900">preservar o patrimônio culinário brasileiro</strong> e torná-lo acessível para futuras gerações.
                </p>
                <p>
                  Hoje, colaboramos com cozinheiras tradicionais de todo o Brasil, coletando não apenas ingredientes e modo de preparo, mas as histórias por trás de cada prato.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/vovo.png"
                  alt="Nossa querida vovó"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{objectFit: 'cover'}}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Missão e Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais do que receitas, preservamos memórias e criamos conexões através do amor pela culinária tradicional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autenticidade</h3>
              <p className="text-gray-600">
                Cada receita é cuidadosamente testada e validada por quem realmente entende do assunto: as cozinheiras tradicionais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comunidade</h3>
              <p className="text-gray-600">
                Criamos um espaço onde avós, mães e filhas podem compartilhar conhecimento e perpetuar tradições familiares.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simplicidade</h3>
              <p className="text-gray-600">
                Acreditamos que as melhores receitas são as mais simples, feitas com amor e ingredientes acessíveis a todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quem Faz Acontecer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a equipe dedicada em preservar e compartilhar nossas tradições culinárias
            </p>
          </div>

          {/* Desenvolvedor */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full -mr-20 -mt-20 z-0"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-50 rounded-full -ml-10 -mb-10 z-0"></div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 py-4 relative z-10">
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl overflow-hidden shadow-xl relative border-4 border-white">
                    <Image
                      src="/images/dev.png"
                      alt="Vinícius Rocha"
                      fill
                      sizes="(max-width: 768px) 192px, 224px"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                      className="hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center md:text-left flex-1 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Vinícius Rocha</h3>
                  <p className="text-blue-600 font-medium mb-4">Desenvolvedor Full-Stack & Fundador</p>
                  <p className="text-gray-600 leading-relaxed">
                    Desenvolvedor apaixonado por tecnologia e tradições culinárias. Formado em Análise e Desenvolvimento de Sistemas, com especialização em desenvolvimento web e experiência de usuário.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-2">
                    Criou o Receitinhas da Vovó com o objetivo de preservar receitas de família e conectar gerações através do amor pela culinária caseira, combinando seu conhecimento técnico com sua paixão pela gastronomia tradicional.
                  </p>
                  <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    <a href="https://github.com/Vinirocha388" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/vinicius-rocha-b12109254/" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção das Vovós */}
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Nossas Queridas Colaboradoras
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              As verdadeiras estrelas do nosso site: as vovós que gentilmente compartilham suas receitas e segredos culinários
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-pink-400 to-pink-500 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform relative">
                  <Image
                    src="/images/vovo2.png" 
                    alt="Vovó Sueli"
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                  <span className="text-lg">❤️</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Vovó Sueli</h4>
              <p className="text-pink-600 font-medium mb-3">Especialista em Doces</p>
              <p className="text-gray-600">
                50 anos de experiência fazendo os brigadeiros e quindins mais deliciosos do bairro. Suas receitas são verdadeiros tesouros familiares.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-400 to-green-500 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform relative">
                  <Image
                    src="/images/vovo3.png" 
                    alt="Vovó Maria"
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-lg">🍲</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Vovó Maria</h4>
              <p className="text-green-600 font-medium mb-3">Mestra dos Salgados</p>
              <p className="text-gray-600">
                Conhecida por suas coxinhas perfeitas e pão de açúcar incomparável. Cada receita vem com muito carinho e histórias especiais.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-400 to-purple-500 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform relative">
                  <Image
                    src="/images/vovo4.png" 
                    alt="Vovó Rosa"
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-lg">🥘</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Vovó Rosa</h4>
              <p className="text-purple-600 font-medium mb-3">Rainha da Comida Nordestina</p>
              <p className="text-gray-600">
                Traz toda a tradição e sabor do Nordeste brasileiro. Suas moquecas e bobós são simplesmente inesquecíveis.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-medium">Nosso eterno agradecimento a todas as vovós colaboradoras!</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Faça parte da nossa família culinária
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
            Descubra receitas que carregam história, sabor e muito amor. Conecte-se com tradições que atravessam gerações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/receitas" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-orange-50 transition-all duration-300"
            >
              Explorar Receitas
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/contato" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}