import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Asegúrate de importar los estilos

const Home = () => {
  const navigate = useNavigate();

  const handleOfferClick = (offerId) => {
    navigate(`/offer/${offerId}`);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Omega Pet Shop</h1>
          <p>Encuentra las mejores ofertas para tu mascota</p>
          <button onClick={() => handleOfferClick('special-offer')}>Ver Ofertas</button>
        </div>
      </section>
      
      <section className="promotions">
        <h2>Ofertas Especiales</h2>
        <div className="promotion-grid">
          <div className="promotion-item">
            <img src="https://via.placeholder.com/300x200" alt="Promoción 1" />
            <h3>Gran Oferta en Comida para Perros</h3>
            <p>Descuentos de hasta el 30% en marcas seleccionadas</p>
            <button onClick={() => handleOfferClick('dog-food')}>Ver Oferta</button>
          </div>
          <div className="promotion-item">
            <img src="https://via.placeholder.com/300x200" alt="Promoción 2" />
            <h3>Descuentos en Juguetes para Gatos</h3>
            <p>Compra 2 y lleva el tercero gratis</p>
            <button onClick={() => handleOfferClick('cat-toys')}>Ver Oferta</button>
          </div>
          {/* Agrega más promociones según sea necesario */}
        </div>
      </section>

      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          <div className="product-item">
            <img src="https://via.placeholder.com/200x200" alt="Producto 1" />
            <h3>Nombre del Producto</h3>
            <p>$Precio</p>
            <button>Ver Más</button>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/200x200" alt="Producto 2" />
            <h3>Nombre del Producto</h3>
            <p>$Precio</p>
            <button>Ver Más</button>
          </div>
          {/* Agrega más productos destacados */}
        </div>
      </section>
    </div>
  );
};

export default Home;


