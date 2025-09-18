
import { api } from '@/services/api';
import Card from '@/components/Card';
import Link from 'next/link';

export default async function RecipesPage() {
  const res = await api.get('/character');
  const recipes = res.data.results;

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-green-800 drop-shadow">Receitas</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>
              <Card
                id={recipe.id}
                titulo={recipe.name}
                imagem={recipe.image}
                descricao={`${recipe.species} - ${recipe.status}`}
                categoria={recipe.gender}
                dataCriacao={recipe.created}
                buttonLabel="Ver Receita"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
