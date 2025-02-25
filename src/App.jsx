import React, { useState } from 'react';
 
export default function SimpleEcommerce() {
  // Estado que armazena os itens do carrinho
  const [cart, setCart] = useState([]);

  // Estado que contém a lista de produtos disponíveis para compra
  const [products, setProducts] = useState([
    { id: 1, name: 'Produto 1', price: 20, image: null },
    { id: 2, name: 'Produto 2', price: 30, image: null },
    { id: 3, name: 'Produto 3', price: 40, image: null },
  ]);

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Função para remover um produto do carrinho pelo ID
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Função para aumentar a quantidade de um item no carrinho
  const incrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Função para diminuir a quantidade de um item no carrinho
  const decrementQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Função para calcular o total da compra
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

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
              onClick={() => addToCart(product)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>

      {/* Seção do Carrinho */}
      <h2 className="text-xl font-bold mb-4 text-gray-800">Carrinho</h2>

      {/* Verifica se o carrinho está vazio */}
      {cart.length === 0 ? (
        <p className="text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center space-x-4">
                {/* Verifica se o item do carrinho tem imagem */}
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                  <p className="text-gray-600">R${item.price}</p>
                </div>
              </div>

              {/* Controles de quantidade */}
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
              </div>

              {/* Preço total do item e botão para remover do carrinho */}
              <div>
                <p className="text-gray-700 font-semibold">R${item.price * item.quantity}</p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}

          {/* Exibição do total da compra */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-gray-800">Total: R${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
