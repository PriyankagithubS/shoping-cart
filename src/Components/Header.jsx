import React from 'react';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>Shopping Cart</h1>
      <div className="cart-info">
        <img src="/cart.png" alt="Cart" className="cart-icon" />
        <span className="cart-count">Items:{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
