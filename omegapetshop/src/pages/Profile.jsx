import React from 'react';
import './Profile.css'; // Asegúrate de importar los estilos

const Profile = () => {
  return (
    <div className="profile">
      <header className="profile-header">
        <div className="profile-info">
          <h1>Mi Perfil</h1>
          <div className="profile-pic">
            <img src="path/to/profile-pic.jpg" alt="Perfil" />
          </div>
          <div className="profile-details">
            <h2>Nombre de Usuario</h2>
            <p>Email: user@example.com</p>
            <p>Teléfono: +1234567890</p>
            <button className="btn-edit">Editar Perfil</button>
          </div>
        </div>
      </header>

      <section className="order-history">
        <h2>Historial de Pedidos</h2>
        <div className="orders-list">
          <div className="order-item">
            <h3>Pedido #12345</h3>
            <p>Fecha: 2024-09-01</p>
            <p>Total: $150.00</p>
            <button className="btn-details">Ver Detalles</button>
          </div>
          {/* Agrega más pedidos aquí */}
        </div>
      </section>

      <section className="settings">
        <h2>Configuración de Cuenta</h2>
        <button className="btn-settings">Cambiar Contraseña</button>
        <button className="btn-settings">Cerrar Sesión</button>
      </section>
    </div>
  );
};

export default Profile;
