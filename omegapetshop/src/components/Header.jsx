import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Asegúrate de que la ruta sea correcta
import './Header.css'; // Importar estilos

const Header = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const categoriesRef = useRef(null);

  const toggleCategories = () => {
    setIsCategoriesOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  // Cierra el menú de categorías si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Omega Pet Shop</Link>
        </div>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Buscar productos, marcas y más..." 
            />
            <button type="submit">Buscar</button>
          </form>
        </div>
        <nav className="nav">
          <ul>
            <li className="categories" ref={categoriesRef}>
              <button className="categories-button" onClick={toggleCategories}>
                Categorías
              </button>
              <ul className={`categories-dropdown ${isCategoriesOpen ? 'open' : 'closed'}`}>
                <li><Link to="/products?category=dogs" onClick={() => setIsCategoriesOpen(false)}>Perros</Link></li>
                <li><Link to="/products?category=cats" onClick={() => setIsCategoriesOpen(false)}>Gatos</Link></li>
                <li><Link to="/products?category=birds" onClick={() => setIsCategoriesOpen(false)}>Pájaros</Link></li>
                <li><Link to="/products?category=fish" onClick={() => setIsCategoriesOpen(false)}>Peces</Link></li>
              </ul>
            </li>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/cart"><i className="fas fa-shopping-cart"></i> Carrito</Link></li>
            <li><Link to="/login"><i className="fas fa-user"></i> Login</Link></li>
            <li><Link to="/Register">Registro</Link></li>
            <li><Link to="/Profile">Cuenta</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;






