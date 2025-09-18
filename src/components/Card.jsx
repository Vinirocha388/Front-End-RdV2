import Image from 'next/image';
import React from 'react';

export default function Card({ 
  id, 
  titulo, 
  imagem, 
  descricao, 
  categoria, 
  dataCriacao,
  // Retrocompatibilidade com os nomes antigos
  name, 
  image, 
  description,
  onClick, 
  buttonLabel 
}) {
  // Usar os novos nomes de propriedades ou os antigos como fallback
  const displayName = titulo || name || '';
  const displayImage = imagem || image || '/placeholder-recipe.jpg'; // Imagem de fallback
  const displayDescription = descricao || description || '';

  return (
    <div className="bg-gradient-to-br from-white to-orange-50/50 rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center hover:-translate-y-2 transition-all duration-300 border border-orange-100/60 backdrop-blur-sm group overflow-hidden relative h-80 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Badge de categoria */}
      {categoria && (
        <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full text-xs font-medium z-20">
          {categoria}
        </div>
      )}
      
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        <div className="w-32 h-32 relative rounded-full mb-3 overflow-hidden flex-shrink-0 border-4 border-white shadow-xl ring-4 ring-orange-100/50">
          <Image 
            src={displayImage}
            alt={displayName}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        
        <h3 className="text-lg font-bold mb-2 text-center text-gray-800 group-hover:text-orange-700 transition-colors duration-300 line-clamp-2 flex-shrink-0">
          {displayName}
        </h3>
        
        <div className="flex-grow flex flex-col justify-between w-full">
          {displayDescription && (
            <p className="text-gray-600 text-sm text-center leading-relaxed line-clamp-3 mb-3">
              {displayDescription}
            </p>
          )}
          
          {dataCriacao && (
            <div className="text-xs text-gray-500 text-center mb-2 italic">
              {new Date(dataCriacao).toLocaleDateString('pt-BR')}
            </div>
          )}
          
          {onClick && (
            <button 
              onClick={() => onClick(id)}
              className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-auto w-full"
            >
              {buttonLabel || 'Ver Receita'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}