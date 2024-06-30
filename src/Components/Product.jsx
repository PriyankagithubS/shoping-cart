import React from 'react';

const Product = ({ id, name, description, image, onAddToCart, onRemoveFromCart, isInCart }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      {isInCart ? (
        <button onClick={() => onRemoveFromCart(id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => onAddToCart({ id, name, description, image })}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
