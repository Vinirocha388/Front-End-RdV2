
'use client';

import { useState, useEffect } from 'react';
import { api } from '@/services/api';
import Card from '@/components/Card';
import Link from 'next/link';

export default function RecipesPage() {
  // Estados - variáveis que guardam informações
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('todos');

  // Buscar receitas quando a página carregar
  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await api.get('/recipes');
        const data = response.data.results || response.data;
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (error) {
        console.log('Erro ao buscar receitas:', error);
      } finally {
        setLoading(false);
      }
    }
    getRecipes();
  }, []);

  // Filtrar receitas por categoria
  const filterRecipes = (category) => {
    setActiveFilter(category);
    
    if (category === 'todos') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => {
        const recipeCategory = (recipe.category || recipe.categoria || '').toLowerCase();
        return recipeCategory.includes(category);
      });
      setFilteredRecipes(filtered);
    }
  };

  // Se está carregando, mostra loading
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

  // Mostra a página com as receitas
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
