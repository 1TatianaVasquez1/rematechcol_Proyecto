import React, { useState } from 'react';

function ClientViewCart() {
  const [cart, setCart] = useState([
    // Simulamos algunos productos en el carrito
    { id: 1, name: 'Producto 1', price: 50 },
    { id: 2, name: 'Producto 2', price: 30 }
  ]);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotal()}</h3>
      <button>Proceder al Pago</button>
    </div>
  );
}

export default ClientViewCart;