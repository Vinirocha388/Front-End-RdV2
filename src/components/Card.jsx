import SafeImage from './SafeImage';
import React, { useState } from 'react';

export default function Card({ 
  imagem, 
  titulo, 
  descricao, 
  ingredientes, 
  modoPreparo, 
  categoria,
  onClick, 
  buttonLabel 
}) {
  return (
    <div className="bg-gradient-to-br from-white to-orange-50/50 rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col hover:-translate-y-2 transition-all duration-300 border border-orange-100/60 backdrop-blur-sm group overflow-hidden relative h-auto w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Badge de categoria */}
      {categoria && (
        <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full text-xs font-medium z-20">
          {categoria}
        </div>
      )}
      
      <div className="relative z-10 flex flex-col w-full">
        {/* Imagem */}
        {imagem && (
          <div className="w-full h-48 relative rounded-xl mb-4 overflow-hidden border-4 border-white shadow-xl">
            <SafeImage 
              src={imagem}
              alt={titulo || 'Receita'}
              fill
              className="transition-transform duration-300 group-hover:scale-105"
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        )}
        
        {/* Título */}
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
          {titulo}
        </h3>
        
        {/* Descrição */}
        {descricao && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {descricao}
          </p>
        )}
        
        {/* Ingredientes */}
        {ingredientes && Array.isArray(ingredientes) && ingredientes.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-orange-600 mb-2">Ingredientes:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {ingredientes.slice(0, 3).map((ingrediente, index) => (
                <li key={index} className="truncate">• {ingrediente}</li>
              ))}
              {ingredientes.length > 3 && (
                <li className="text-orange-500 italic">+ {ingredientes.length - 3} mais...</li>
              )}
            </ul>
          </div>
        )}
        
        {/* Modo de Preparo (resumo) */}
        {modoPreparo && Array.isArray(modoPreparo) && modoPreparo.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-orange-600 mb-2">Preparo:</h4>
            <div className="text-xs text-gray-600">
              <p className="line-clamp-2">{modoPreparo[0]}</p>
              {modoPreparo.length > 1 && (
                <p className="text-orange-500 italic mt-1">+ {modoPreparo.length - 1} passos...</p>
              )}
            </div>
          </div>
        )}
        
        {/* Botão */}
        {onClick && (
          <button 
            onClick={onClick}
            className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-auto w-full"
          >
            {buttonLabel || 'Ver Receita'}
          </button>
        )}
      </div>
    </div>
  );
}