'use client';

import { useEffect, useState, use } from 'react';
import SafeImage from '@/components/SafeImage';
import { getRecipeById } from '@/services/recipeService';

export default function RecipePage({ params }) {
  const { id } = use(params);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Buscar receita
  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await getRecipeById(id);
        if (response.success) {
          setRecipe(response.data);
        }
      } catch (error) {
        console.log('Erro:', error);
      } finally {
        setLoading(false);
      }
    }
    getRecipe();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-4">
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Não encontrou
  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-4">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-orange-600">Receita não encontrada</h2>
        </div>
      </div>
    );
  }

  // Pegar dados da receita
  const title = recipe.title || recipe.titulo;
  const description = recipe.description || recipe.descricao;
  const image = recipe.image || recipe.imagem;
  const ingredients = recipe.ingredients || recipe.ingredientes || [];
  const instructions = recipe.instructions || recipe.modoPreparo || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Botão Voltar */}
        <div className="mb-6">
          <a
            href="/recipes"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar
          </a>
        </div>

        {/* Card da Receita */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Imagem */}
          {image && (
            <div className="relative h-64 md:h-96 bg-gray-200">
              <SafeImage
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Conteúdo */}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h1>
            
            {description && (
              <p className="text-gray-600 text-lg mb-6">{description}</p>
            )}

            {/* Informações */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {recipe.tempoPreparo && (
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">⏱️ Tempo</p>
                  <p className="text-gray-600">{recipe.tempoPreparo}</p>
                </div>
              )}
              
              {recipe.porcoes && (
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">👥 Porções</p>
                  <p className="text-gray-600">{recipe.porcoes}</p>
                </div>
              )}
              
              {recipe.dificuldade && (
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">⚡ Dificuldade</p>
                  <p className="text-gray-600 capitalize">{recipe.dificuldade}</p>
                </div>
              )}
            </div>

            {/* Ingredientes e Preparo */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Ingredientes */}
              {ingredients.length > 0 && (
                <div className="bg-orange-50 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    🥘 Ingredientes
                  </h2>
                  <ul className="space-y-2">
                    {ingredients.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modo de Preparo */}
              {instructions.length > 0 && (
                <div className="bg-orange-50 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    👩‍🍳 Modo de Preparo
                  </h2>
                  <ol className="space-y-3">
                    {instructions.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
