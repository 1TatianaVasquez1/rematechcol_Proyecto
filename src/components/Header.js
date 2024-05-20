import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>REMATECHCOL</h1>
      <nav>
        <ul>
          <li><Link to="/admin/add-product">Agregar Producto</Link></li>
          <li><Link to="/admin/view-products">Ver Productos</Link></li>
          <li><Link to="/admin/view-sales">Ver Ventas</Link></li>
          <li><Link to="/client/view-products">Ver Productos</Link></li>
          <li><Link to="/client/view-cart">Carrito</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;