'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'doce',
    image: '',
    ingredients: [''],
    instructions: ['']
  });

  // Buscar receitas
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      console.log('Buscando receitas...');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes`);
      
      if (!response.ok) {
        console.error('Erro ao buscar receitas:', response.status);
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      
      const result = await response.json();
      const data = result.results || result;
      console.log('Receitas carregadas:', data.length);
      setRecipes(data);
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
    } finally {
      setLoading(false);
    }
  };

  // Manipular formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (index, value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (index, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  // Abrir modal para nova receita
  const openNewRecipeModal = () => {
    setEditingRecipe(null);
    setFormData({
      title: '',
      description: '',
      category: 'doce',
      image: '',
      ingredients: [''],
      instructions: ['']
    });
    setShowModal(true);
  };

  // Abrir modal para editar receita
  const openEditRecipeModal = (recipe) => {
    setEditingRecipe(recipe);
    setFormData({
      title: recipe.title || recipe.titulo || '',
      description: recipe.description || recipe.descricao || '',
      category: recipe.category || recipe.categoria || 'doce',
      image: recipe.image || recipe.imagem || '',
      ingredients: Array.isArray(recipe.ingredients || recipe.ingredientes) ? (recipe.ingredients || recipe.ingredientes) : [''],
      instructions: Array.isArray(recipe.instructions || recipe.instrucoes) ? (recipe.instructions || recipe.instrucoes) : ['']
    });
    setShowModal(true);
  };

  // Salvar receita com PUT (atualização completa)
  const handleSave = async (e) => {
    e.preventDefault();
    await saveRecipe('PUT');
  };

  // Salvar receita com PATCH (atualização parcial)
  const handlePatch = async (e) => {
    e.preventDefault();
    await saveRecipe('PATCH');
  };

  // Função genérica para salvar com PUT ou PATCH
  const saveRecipe = async (method = 'PUT') => {
    try {
      const recipeData = {
        ...formData,
        ingredients: formData.ingredients.filter(item => item.trim() !== ''),
        instructions: formData.instructions.filter(item => item.trim() !== '')
      };

      let response;
      
      if (editingRecipe) {
        console.log(`Atualizando receita com ${method}:`, editingRecipe.id, recipeData);
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/${editingRecipe.id}`, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipeData),
        });
      } else {
        console.log('Criando nova receita:', recipeData);
        response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipeData),
        });
      }

      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro na resposta:', response.status, errorText);
        throw new Error(`Erro HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log('Resposta do servidor:', result);

      await getRecipes();
      setShowModal(false);
      alert(editingRecipe ? `Receita atualizada com sucesso! (${method})` : 'Receita criada com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar receita:', error);
      alert(`Erro ao salvar receita: ${error.message}`);
    }
  };

  // Excluir receita
  const handleDelete = async (recipeId) => {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      try {
        console.log('Excluindo receita:', recipeId);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/${recipeId}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Erro ao excluir:', response.status, errorText);
          throw new Error(`Erro HTTP ${response.status}: ${errorText}`);
        }
        
        console.log('Receita excluída com sucesso');
        await getRecipes();
        alert('Receita excluída com sucesso!');
      } catch (error) {
        console.error('Erro ao excluir receita:', error);
        alert(`Erro ao excluir receita: ${error.message}`);
      }
    }
  };

  // Função para editar receita diretamente (atalho)
  const handleQuickEdit = async (recipeId, field, value) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recipes/${recipeId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [field]: value }),
      });
      await getRecipes();
      alert('Receita atualizada!');
    } catch (error) {
      console.log('Erro ao editar:', error);
      alert('Erro ao editar receita');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-amber-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-amber-900">Painel Administrativo</h1>
              <p className="text-amber-700 mt-2">Gerencie as receitas da Vovó</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Voltar ao Site
              </Link>
              <button
                onClick={openNewRecipeModal}
                className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                Nova Receita
              </button>
            </div>
          </div>
        </div>

        {/* Lista de Receitas */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">Receitas Cadastradas</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
              <p className="text-amber-700 mt-4">Carregando receitas...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-amber-50">
                    <th className="px-4 py-3 text-left text-amber-900 font-semibold">Título</th>
                    <th className="px-4 py-3 text-left text-amber-900 font-semibold">Categoria</th>
                    <th className="px-4 py-3 text-left text-amber-900 font-semibold">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe) => (
                    <tr key={recipe.id} className="border-b hover:bg-amber-25">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {(recipe.image || recipe.imagem) && (
                            <img
                              src={recipe.image || recipe.imagem}
                              alt={recipe.title || recipe.titulo}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          )}
                          <div>
                            <p className="font-medium text-amber-900">{recipe.title || recipe.titulo}</p>
                            <p className="text-sm text-amber-700 truncate max-w-xs">
                              {recipe.description || recipe.descricao}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-amber-700 capitalize">{recipe.category || recipe.categoria}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditRecipeModal(recipe)}
                            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDelete(recipe.id)}
                            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                          >
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {recipes.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-amber-700">Nenhuma receita encontrada.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-amber-900">
                  {editingRecipe ? 'Editar Receita' : 'Nova Receita'}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-6">
                {/* Informações básicas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">
                      Título *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">
                      Categoria *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="doce">Doce</option>
                      <option value="salgado">Salgado</option>
                      <option value="bebida">Bebida</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    Descrição *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    URL da Imagem
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Ingredientes */}
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    Ingredientes *
                  </label>
                  {formData.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={ingredient}
                        onChange={(e) => handleArrayChange(index, e.target.value, 'ingredients')}
                        placeholder="Digite um ingrediente"
                        className="flex-1 px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem(index, 'ingredients')}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('ingredients')}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    + Adicionar Ingrediente
                  </button>
                </div>

                {/* Instruções */}
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    Modo de Preparo *
                  </label>
                  {formData.instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-medium mt-2">
                        {index + 1}
                      </div>
                      <textarea
                        value={instruction}
                        onChange={(e) => handleArrayChange(index, e.target.value, 'instructions')}
                        placeholder="Digite o passo do preparo"
                        rows={2}
                        className="flex-1 px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem(index, 'instructions')}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        -
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('instructions')}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    + Adicionar Passo
                  </button>
                </div>

                {/* Botões */}
                <div className="flex justify-end gap-4 pt-6 border-t">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancelar
                  </button>
                  
                  {editingRecipe ? (
                    <>
                      <button
                        type="button"
                        onClick={handlePatch}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        title="Atualização parcial - PATCH"
                      >
                        Atualizar (PATCH)
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                        title="Atualização completa - PUT"
                      >
                        Atualizar (PUT)
                      </button>
                    </>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                    >
                      Criar Receita
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}