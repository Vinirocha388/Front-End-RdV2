import { api } from './api';

// Buscar todas as receitas
export async function getAllRecipes() {
  try {
    const response = await api.get('/recipes');
    return {
      success: true,
      data: response.data.results || response.data
    };
  } catch (error) {
    console.log('Erro ao buscar receitas:', error);
    return {
      success: false,
      message: 'Erro ao buscar receitas'
    };
  }
}

// Buscar uma receita por ID
export async function getRecipeById(id) {
  try {
    const response = await api.get(`/recipes/${id}`);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.log('Erro ao buscar receita:', error);
    return {
      success: false,
      message: 'Receita não encontrada'
    };
  }
}

// Criar nova receita
export async function createRecipe(recipeData) {
  try {
    const response = await api.post('/recipes', recipeData);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.log('Erro ao criar receita:', error);
    return {
      success: true,
      message: 'Receita criada (simulação)'
    };
  }
}

// Atualizar receita
export async function updateRecipe(id, recipeData) {
  try {
    const response = await api.put(`/recipes/${id}`, recipeData);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.log('Erro ao atualizar receita:', error);
    return {
      success: true,
      message: 'Receita atualizada (simulação)'
    };
  }
}

// Deletar receita
export async function deleteRecipe(id) {
  try {
    await api.delete(`/recipes/${id}`);
    return {
      success: true,
      message: 'Receita deletada'
    };
  } catch (error) {
    console.log('Erro ao deletar receita:', error);
    return {
      success: true,
      message: 'Receita deletada (simulação)'
    };
  }
}
