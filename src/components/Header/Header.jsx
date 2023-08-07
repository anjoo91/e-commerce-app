import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header({ user, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">OnTime Watch Store</Link>
          </div>
          {isMobile ? (
            <div className="navbar-menu" onClick={toggleMenu}>
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          ) : (
            <div className="navbar-links">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
              {user ? (
                <>
                  <Link to="/order-history">Order History</Link>
                  <Link to="/login" onClick={handleLogout}>
                    Sign Out
                  </Link>
                </>
              ) : (
                <Link to="/login">Sign In</Link>
              )}
            </div>
          )}
        </nav>
        {isMobile && isOpen && (
          <div className="mobile-menu">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            {user ? (
              <>
                <Link to="/order-history">Order History</Link>
                <Link to="/login" onClick={handleLogout}>
                  Sign Out
                </Link>
              </>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
