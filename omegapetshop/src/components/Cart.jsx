// src/components/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p>El carrito está vacío.</p>;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(product => (
        <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default Cart;
