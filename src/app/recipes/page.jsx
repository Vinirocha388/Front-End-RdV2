
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
  const [searchTerm, setSearchTerm] = useState('');

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
    applyFilters(category, searchTerm);
  };

  // Filtrar receitas por pesquisa
  const handleSearch = (term) => {
    setSearchTerm(term);
    applyFilters(activeFilter, term);
  };

  // Aplicar filtros combinados (categoria + pesquisa)
  const applyFilters = (category, search) => {
    let filtered = recipes;

    // Filtrar por categoria
    if (category !== 'todos') {
      filtered = filtered.filter(recipe => {
        const recipeCategory = (recipe.category || recipe.categoria || '').toLowerCase();
        return recipeCategory.includes(category);
      });
    }

    // Filtrar por termo de pesquisa
    if (search.trim() !== '') {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(recipe => {
        const title = (recipe.title || recipe.titulo || '').toLowerCase();
        const description = (recipe.description || recipe.descricao || '').toLowerCase();
        return title.includes(searchLower) || description.includes(searchLower);
      });
    }

    setFilteredRecipes(filtered);
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

      {/* Barra de Pesquisa */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar receitas por nome ou descrição..."
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
          />
          {searchTerm && (
            <button
              onClick={() => handleSearch('')}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-orange-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
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
            {searchTerm 
              ? `Não encontramos receitas para "${searchTerm}". Tente outra pesquisa!`
              : `Não encontramos receitas para a categoria "${activeFilter}". Tente outro filtro!`
            }
          </p>
          {(searchTerm || activeFilter !== 'todos') && (
            <button
              onClick={() => {
                setSearchTerm('');
                filterRecipes('todos');
              }}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
            >
              Limpar filtros
            </button>
          )}
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
