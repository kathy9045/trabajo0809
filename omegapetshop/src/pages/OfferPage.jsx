// src/pages/OfferPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './OfferPage.css'; // Asegúrate de importar los estilos

const OfferPage = () => {
  const { offerId } = useParams(); // Usar parámetros de URL para identificar la oferta

  return (
    <div className="offer-page">
      <h1>Oferta {offerId}</h1>
      <p>Detalles de la oferta...</p>
      {/* Aquí puedes agregar más detalles de la oferta según sea necesario */}
    </div>
  );
};

export default OfferPage;
