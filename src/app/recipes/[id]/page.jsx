'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getRecipeById } from '@/services/recipeService';

export default function RecipePage({ params }) {
  const { id } = params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (err) {
        setError(err.message || 'Erro ao carregar receita');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando receita...</p>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-20">
          <p className="text-red-600 text-lg">Erro: {error}</p>
        </div>
      </div>
    </div>
  );

  if (!recipe) return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">Receita não encontrada.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header da Receita */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-80">
            <Image
              src={recipe.imagem || '/images/image.png'}
              alt={recipe.titulo || 'Receita'}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="p-6 text-white">
                <h1 className="text-4xl font-bold mb-2">{recipe.titulo}</h1>
                {recipe.categoria && (
                  <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                    {recipe.categoria}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Descrição */}
        {recipe.descricao && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre a Receita</h2>
            <p className="text-gray-600 leading-relaxed">{recipe.descricao}</p>
          </div>
        )}

        {/* Grid com Ingredientes e Modo de Preparo */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ingredientes */}
          {recipe.ingredientes && recipe.ingredientes.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">🥘</span>
                Ingredientes
              </h2>
              <ul className="space-y-3">
                {recipe.ingredientes.map((ingrediente, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{ingrediente}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modo de Preparo */}
          {recipe.modoPreparo && recipe.modoPreparo.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">👩‍🍳</span>
                Modo de Preparo
              </h2>
              <ol className="space-y-4">
                {recipe.modoPreparo.map((passo, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{passo}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}