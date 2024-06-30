import React, { useState } from 'react';
import './App.css';
import Product from './Components/Product';
import ShoppingCart from './Components/ShoppingCart';
import Header from './Components/Header';

const productsList = [
  { id: 1, name: 'Crocs shoes', description: 'Unisex shoes', image: '/crocs.png' },
  { id: 2, name: 'Woodland Shoes', description: 'Stylish woodland shoes', image: '/woodland.png' },
  { id: 3, name: 'Red shoes', description: 'Shoes', image: '/USI shoe.png' },
  { id: 4, name: 'USI  Shoes', description: 'Women Shoes', image: '/bacca bucci viking.png' },
  { id: 5, name: 'Crocs slidders', description: 'Fashion at every time', image: '/crocs sliders.png' },
  { id: 6, name: 'Casual shoes', description: 'Uni-sex shoes', image: '/shoe 1.png' },
  { id: 7, name: 'Casual shoes', description: 'Women shoes', image: '/vendoz women.png' },
  { id: 8, name: 'Casual shoes', description: 'Women shoes', image: '/layasa women.png' },
  { id: 9, name: 'Trendy shoes', description: 'Men shoes', image: '/bucci .png' },
  { id: 10, name: 'Puma shoes', description: 'Uni-sex shoes', image: '/puma unisex sneakers.png' },
  {id:11,name:'sparx',description:'Sneakers',image:'/sparx sneakers.png'},
  {id:12,name:'Crocs',description:'Sandals',image:'/crocs sandles.png'},
  
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <div id="products">
        {productsList.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            isInCart={isInCart(product.id)}
          />
        ))}
      </div>
      <ShoppingCart cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default App;
