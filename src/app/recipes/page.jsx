
'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Link from 'next/link';
import { getAllRecipes } from '@/services/recipeService';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState('api');
  const [activeFilter, setActiveFilter] = useState('todos');

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setLoading(true);
        const response = await getAllRecipes();
        
        if (response.success) {
          setRecipes(response.data);
          setFilteredRecipes(response.data);
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

  // Função para filtrar receitas por categoria
  const filterRecipes = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'todos') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => {
        const categoria = (recipe.categoria || recipe.category || '').toLowerCase();
        
        switch (filter) {
          case 'salgado':
            return categoria.includes('salgado') || categoria.includes('prato principal') || 
                   categoria.includes('entrada') || categoria.includes('almoço') || 
                   categoria.includes('jantar') || categoria.includes('lanche');
          case 'doce':
            return categoria.includes('doce') || categoria.includes('sobremesa') || 
                   categoria.includes('bolo') || categoria.includes('torta') || 
                   categoria.includes('pudim') || categoria.includes('açúcar');
          case 'bebida':
            return categoria.includes('bebida') || categoria.includes('drink') || 
                   categoria.includes('suco') || categoria.includes('vitamina') || 
                   categoria.includes('café') || categoria.includes('chá');
          default:
            return true;
        }
      });
      setFilteredRecipes(filtered);
    }
  };

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

      {/* Filtros */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-orange-600 mb-4">🍽️ Filtrar por categoria:</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => filterRecipes('todos')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeFilter === 'todos'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
            }`}
          >
            🍯 Todas
          </button>
          <button
            onClick={() => filterRecipes('salgado')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeFilter === 'salgado'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
            }`}
          >
            🧂 Salgado
          </button>
          <button
            onClick={() => filterRecipes('doce')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeFilter === 'doce'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
            }`}
          >
            🍰 Doce
          </button>
          <button
            onClick={() => filterRecipes('bebida')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeFilter === 'bebida'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
            }`}
          >
            🥤 Bebida
          </button>
        </div>
        
        {/* Contador de receitas */}
        <div className="mt-4 text-sm text-gray-600">
          Mostrando {filteredRecipes.length} de {recipes.length} receita{recipes.length !== 1 ? 's' : ''}
        </div>
      </div>
      
      {/* Mensagem quando não há receitas no filtro */}
      {filteredRecipes.length === 0 && recipes.length > 0 && (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-orange-600 mb-2">Nenhuma receita encontrada</h3>
          <p className="text-gray-600">
            Não encontramos receitas para a categoria "{activeFilter}". Tente outro filtro!
          </p>
        </div>
      )}
      
      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`} className="block h-full">
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
        ))}
      </div>
    </section>
  );
}
