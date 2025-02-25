import React, {  useState } from 'react';

export default function Teste() {
   
  // Estado que contém a lista de produtos disponíveis para compra
const products = [
  { id: 1, name: 'Produto 1', price: 20, image: null },
  { id: 2, name: 'Produto 2', price: 30, image: null },
  { id: 3, name: 'Produto 3', price: 40, image: null },
] ;
 
return (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Simples Ecommerce</h1>
      {/* Exibição da lista de produtos disponíveis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            {/* Verifica se o produto tem imagem, se não, exibe um espaço reservado */}
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded-md" />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-32 mb-2" />
            )}
            <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
            <p className="text-gray-600">R${product.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
  
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
 
      </div>
    )}
 