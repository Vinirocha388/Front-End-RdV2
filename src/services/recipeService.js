import { api } from './api';

export async function getRecipeById(id) {
  try {
    const res = await api.get(`/recipes/${id}`);
    return {
      success: true,
      data: res.data
    };
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return {
      success: false,
      message: error.response?.data?.message || 'Erro ao buscar receita'
    };
  }
}

export async function getAllRecipes() {
  try {
    const res = await api.get('/recipes');
    return {
      success: true,
      data: res.data.results || res.data
    };
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return {
      success: false,
      message: error.response?.data?.message || 'Erro ao buscar receitas'
    };
  }
}