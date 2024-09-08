// src/components/ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css'; // Asegúrate de que el archivo exista

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={`/images/${product.image}`} alt={product.title} />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <Link to={`/product/${product.id}`} className="view-details">Ver detalles</Link>
      </div>
    </div>
  );
};

export default ProductItem;
