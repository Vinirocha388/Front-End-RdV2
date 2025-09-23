'use client';

import React, { useEffect, useState, use } from 'react';
import SafeImage from '@/components/SafeImage';
import { getRecipeById } from '@/services/recipeService';

export default function RecipePage({ params }) {
  const { id } = use(params);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Função auxiliar para garantir que os dados sejam arrays
  const ensureArray = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (typeof data === 'string') {
      // Para o modo de preparo, só divide por quebra de linha, não por vírgula
      // porque as instruções podem conter vírgulas
      return data.split(/\n/).map(item => item.trim()).filter(item => item.length > 0);
    }
    return [];
  };

  // Função específica para ingredientes (pode dividir por vírgula)
  const ensureIngredientsArray = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (typeof data === 'string') {
      // Para ingredientes, pode dividir por vírgula, ponto e vírgula ou quebra de linha
      return data.split(/[,;\n]/).map(item => item.trim()).filter(item => item.length > 0);
    }
    return [];
  };

  // Função para obter ingredientes como array
  const getIngredientsArray = () => {
    return ensureIngredientsArray(recipe?.ingredientes || recipe?.ingredients);
  };

  // Função para obter modo de preparo como array
  const getInstructionsArray = () => {
    const instructions = recipe?.modoPreparo || recipe?.instructions || recipe?.preparo;
    
    if (!instructions) return [];
    if (Array.isArray(instructions)) return instructions;
    
    if (typeof instructions === 'string') {
      // Remove quebras de linha excessivas e normaliza o texto
      let normalizedText = instructions.replace(/\s+/g, ' ').trim();
      
      // Primeiro tenta dividir por números no início (1., 2., 3., etc.)
      if (normalizedText.match(/\d+\./)) {
        return normalizedText
          .split(/(?=\d+\.)/)
          .map(step => step.replace(/^\d+\.\s*/, '').trim())
          .filter(step => step.length > 0);
      }
      
      // Se não tem numeração explícita, tenta dividir por pontos finais seguidos de maiúscula
      if (normalizedText.match(/\.\s+[A-Z]/)) {
        return normalizedText
          .split(/\.\s+(?=[A-Z])/)
          .map(step => step.trim())
          .filter(step => step.length > 0)
          .map(step => step.endsWith('.') ? step : step + '.');
      }
      
      // Se não conseguiu dividir de forma inteligente, divide por quebras de linha
      if (instructions.includes('\n')) {
        return instructions.split('\n').map(item => item.trim()).filter(item => item.length > 0);
      }
      
      // Como último recurso, retorna o texto completo como um único passo
      return [normalizedText];
    }
    
    return [];
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await getRecipeById(id);
        
        if (response.success) {
          console.log('Dados da receita recebidos:', response.data);
          console.log('Modo de preparo original:', response.data?.modoPreparo || response.data?.instructions);
          setRecipe(response.data);
        } else {
          setError(response.message || 'Erro ao carregar receita');
        }
      } catch (err) {
        console.error('Erro ao buscar receita:', err);
        setError('Erro ao conectar com o servidor');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      console.log('Buscando receita com ID:', id);
      fetchRecipe();
    }
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
        {/* Botão Voltar */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-200 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </button>
        </div>
        {/* Header da Receita */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-80 bg-gradient-to-br from-orange-100 to-amber-100">
            <SafeImage
              src={recipe?.imagem || recipe?.image}
              alt={recipe?.titulo || recipe?.title || 'Receita'}
              fill
              className="object-cover safe-image-container"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end">
              <div className="p-6 text-white">
                <h1 className="text-4xl font-bold mb-2">{recipe.titulo || recipe.title}</h1>
                {(recipe.categoria || recipe.category) && (
                  <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                    {recipe.categoria || recipe.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Descrição */}
        {(recipe.descricao || recipe.description) && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre a Receita</h2>
            <p className="text-gray-600 leading-relaxed">{recipe.descricao || recipe.description}</p>
          </div>
        )}

        {/* Informações da Receita */}
        {(recipe.tempoPreparo || recipe.preparationTime || recipe.porcoes || recipe.servings || recipe.dificuldade || recipe.difficulty) && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informações</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(recipe.tempoPreparo || recipe.preparationTime) && (
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Tempo de Preparo</p>
                    <p className="text-gray-600">{recipe.tempoPreparo || recipe.preparationTime}</p>
                  </div>
                </div>
              )}
              
              {(recipe.porcoes || recipe.servings) && (
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Porções</p>
                    <p className="text-gray-600">{recipe.porcoes || recipe.servings}</p>
                  </div>
                </div>
              )}
              
              {(recipe.dificuldade || recipe.difficulty) && (
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Dificuldade</p>
                    <p className="text-gray-600">{recipe.dificuldade || recipe.difficulty}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Grid com Ingredientes e Modo de Preparo */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ingredientes */}
          {recipe && getIngredientsArray().length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">🥘</span>
                Ingredientes
              </h2>
              <ul className="space-y-3">
                {getIngredientsArray().map((ingrediente, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{ingrediente}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modo de Preparo */}
          {recipe && getInstructionsArray().length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">👩‍🍳</span>
                Modo de Preparo
              </h2>
              <ol className="space-y-4">
                {getInstructionsArray().map((passo, index) => (
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