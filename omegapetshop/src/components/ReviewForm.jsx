// src/components/ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ productId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviado:', { review, rating });
    // Aquí se enviaría la reseña usando axios
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Reseña:
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      </label>
      <label>
        Calificación:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>
      <button type="submit">Enviar reseña</button>
    </form>
  );
};

export default ReviewForm;
