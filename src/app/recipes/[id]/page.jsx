import { api } from '@/services/api';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function RecipeDetail({ params }) {
  try {
    const res = await api.get(`/character/${params.id}`);
    const recipe = res.data;
    
    const getStatusColor = (status) => {
      switch (status?.toLowerCase()) {
        case 'alive':
          return 'bg-green-100 text-green-800 border-green-300';
        case 'dead':
          return 'bg-red-100 text-red-800 border-red-300';
        case 'unknown':
          return 'bg-gray-100 text-gray-800 border-gray-300';
        default:
          return 'bg-orange-100 text-orange-800 border-orange-300';
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="inline-block p-2 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                  <Image 
                    src={recipe.image} 
                    alt={recipe.name} 
                    width={160} 
                    height={160} 
                    className="rounded-full border-4 border-white shadow-xl" 
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  {recipe.name}
                </h1>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold border-2 ${getStatusColor(recipe.status)}`}>
                  {recipe.status}
                </div>
              </div>
            </div>

            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
              
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-amber-600 rounded-full mr-3"></div>
                    Informações da Receita
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-xl border-l-4 border-orange-500">
                      <span className="text-sm font-semibold text-orange-700 uppercase tracking-wide">Espécie</span>
                      <p className="text-lg text-gray-800 font-medium mt-1">{recipe.species}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border-l-4 border-amber-500">
                      <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide">Categoria</span>
                      <p className="text-lg text-gray-800 font-medium mt-1">{recipe.gender}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-emerald-600 rounded-full mr-3"></div>
                    Localização
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Origem</span>
                      <p className="text-lg text-gray-800 font-medium mt-1">{char.origin?.name || 'Desconhecida'}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-xl border-l-4 border-purple-500">
                      <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Localização Atual</span>
                      <p className="text-lg text-gray-800 font-medium mt-1">{char.location?.name || 'Desconhecida'}</p>
                    </div>
                  </div>
                </div>
              </div>

         
              <div className="mt-12 text-center">
                <Link 
                  href="/recipes" 
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg 
                    className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Voltar às Receitas
                </Link>
              </div>
            </div>
          </div>

        
          <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 p-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                ID do Personagem
              </h4>
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-mono text-sm font-medium">
                #{char.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}