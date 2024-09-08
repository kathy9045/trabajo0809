// src/components/ProductDetail.js
import React from 'react';
import './ProductDetail.css'; // Verifica que este archivo exista

const ProductDetail = ({ product }) => (
  <div className="product-detail">
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title} />
    <p>{product.description}</p>
    <p>Precio: ${product.price}</p>
  </div>
);

export default ProductDetail;

