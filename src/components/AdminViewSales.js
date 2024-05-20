import React, { useState, useEffect } from 'react';

function AdminViewSales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    // Simular fetch de ventas
    fetch('/sales.json')
      .then(response => response.json())
      .then(data => setSales(data));
  }, []);

  return (
    <div>
      <h2>Ventas Realizadas</h2>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>
            <h3>Venta #{sale.id}</h3>
            <p>Cliente: {sale.customer}</p>
            <p>Fecha: {sale.date}</p>
            <p>Total: ${sale.total}</p>
            <ul>
              {sale.products.map(product => (
                <li key={product.id}>
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminViewSales;