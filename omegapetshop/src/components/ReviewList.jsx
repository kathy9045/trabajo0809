// src/components/ReviewList.js
import React, { useEffect, useState } from 'react';

const ReviewList = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Aquí iría la lógica para obtener reseñas desde la API
  }, [productId]);

  return (
    <div>
      <h3>Opiniones</h3>
      {reviews.length === 0 ? <p>No hay opiniones aún.</p> : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>Calificación: {review.rating}</p>
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
