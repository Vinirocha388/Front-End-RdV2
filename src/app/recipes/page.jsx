
'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Link from 'next/link';
import { getAllRecipes } from '@/services/recipeService';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState('api');

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setLoading(true);
        const response = await getAllRecipes();
        
        if (response.success) {
          setRecipes(response.data);
          setDataSource(response.source || 'unknown');
          
          // Log informativo sobre a fonte dos dados
          if (response.isDemo) {
            console.log('📝 Usando dados de exemplo - API não disponível');
          } else {
            console.log('🌐 Dados carregados da API com sucesso');
          }
        } else {
          setError(response.message);
        }
      } catch (err) {
        console.error('Erro ao buscar receitas:', err);
        setError('Não foi possível carregar as receitas. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <section className="py-10">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin w-12 h-12 border-4 border-orange-300 border-t-orange-500 rounded-full"></div>
          <span className="ml-3 text-orange-600 font-medium">Carregando receitas...</span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center max-w-lg mx-auto">
          <div className="text-5xl mb-4">😢</div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3">Ops! Algo deu errado</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full font-medium transition-all"
          >
            🔄 Tentar novamente
          </button>
        </div>
      </section>
    );
  }



  return (
    <section className="py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-orange-600 drop-shadow-sm">Receitas da Vovó</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>
              <Card
                imagem={recipe.imagem || recipe.image}
                titulo={recipe.titulo || recipe.title}
                descricao={recipe.description || recipe.descricao}
                ingredientes={recipe.ingredients || recipe.ingredientes}
                modoPreparo={recipe.instructions || recipe.modoPreparo}
                categoria={recipe.category || recipe.categoria}
                onClick={() => {}}
                buttonLabel="Ver Receita"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
