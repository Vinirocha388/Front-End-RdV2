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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <div className="text-white text-8xl">👵</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">❤️</span>
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
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white text-4xl font-bold">VR</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Vinícius Rocha</h3>
                <p className="text-blue-600 font-medium mb-4">Desenvolvedor & Fundador</p>
                <p className="text-gray-600 leading-relaxed">
                  Desenvolvedor full-stack apaixonado por tecnologia e tradições culinárias. Criou esta plataforma com o objetivo de preservar receitas de família e conectar gerações através do amor pela culinária caseira.
                </p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                  <span className="text-5xl">👵🏽</span>
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
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                  <span className="text-5xl">👵🏻</span>
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
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                  <span className="text-5xl">👵🏾</span>
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
              <span className="text-2xl">🙏</span>
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