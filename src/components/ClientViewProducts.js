import React, { useState, useEffect } from 'react';

function ClientViewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular fetch de productos
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Categoría: {product.category}</p>
            <img src={product.image} alt={product.name} width="100" />
            <button>Añadir al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientViewProducts;