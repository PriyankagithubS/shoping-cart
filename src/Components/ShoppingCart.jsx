import React from 'react';

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  return (
    <div id="cart">
      <h2>Added Items to the Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
