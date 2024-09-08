// src/components/CartItem.js
import React from 'react';

const CartItem = ({ product, removeFromCart }) => (
  <div>
    <h3>{product.title}</h3>
    <p>Precio: ${product.price}</p>
    <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
  </div>
);

export default CartItem;
