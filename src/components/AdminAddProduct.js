import React, { useState } from 'react';

function AdminAddProduct({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: 'DISCO DURO SSD',
    price: '350.000',
    description: 'ADATA 630  - 480Gb',
    category: 'COMPUTO',
    image: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      name: 'MEMORIA RAM',
      price: '150.000',
      description: 'MEMORIA RAM SAMSUNG - 8Gb',
      category: 'COMPUTO',
      image: ''
    });
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre del producto" value={product.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Precio" value={product.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Descripción" value={product.description} onChange={handleChange} required></textarea>
        <input type="text" name="category" placeholder="Categoría" value={product.category} onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL de la imagen" value={product.image} onChange={handleChange} required />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default AdminAddProduct;
