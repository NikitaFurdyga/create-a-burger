import React, { useState } from 'react';
import './App.css';
import myImage from './assets/niz.jpg';
import myVerh from './assets/verh.jpg';
import myKotleta from './assets/kotleta.jpg';
import myCheese from './assets/cheese.jpg';
import myList from './assets/list.jpg';
import myTomato from './assets/tomato.jpg';

function MyComponent() {
  const [showExtraImagesKotleta, setShowExtraImagesKotleta] = useState([]);
  const [showExtraImagesCheese, setShowExtraImagesCheese] = useState([]);
  const [showExtraImagesList, setShowExtraImagesList] = useState([]);
  const [showExtraImagesTomato, setShowExtraImagesTomato] = useState([]);

  const itemData = {
    [myKotleta]: { name: 'Котлета', price: 10 },
    [myCheese]: { name: 'Сыр', price: 5 },
    [myList]: { name: 'Лист салата', price: 2 },
    [myTomato]: { name: 'Помидор', price: 3 },
  };

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleExtraImage = (image, setShowExtraImages, price) => {
    setShowExtraImages(prevImages => {
      setCart(prevCart => [...prevCart, { image, price }]);
      setTotalPrice(prevTotalPrice => prevTotalPrice + price);
      return [...prevImages, image];
    });
  };

  const removeExtraSingleImage = (image, setShowExtraImages, price) => {
    setShowExtraImages(prevImages => {
      const indexOfImage = prevImages.indexOf(image);
      if (indexOfImage !== -1) {
        const updatedImages = [...prevImages];
        updatedImages.splice(indexOfImage, 1);
        setCart(prevCart => {
          const updatedCart = [...prevCart];
          const itemToRemove = updatedCart.find(item => item.image === image);
          if (itemToRemove) {
            updatedCart.splice(updatedCart.indexOf(itemToRemove), 1);
            setTotalPrice(prevTotalPrice => prevTotalPrice - price);
          }
          return updatedCart;
        });
        return updatedImages;
      }
      return prevImages;
    });
  };

  return (
    <div className='main'>
      <div className='Burger'>
        <img src={myVerh} alt="Булка" className='Verh'></img>
        {showExtraImagesList.map((image, index) => (
          <img key={index} src={image} alt="Лист" className='List'></img>
        ))}
        {showExtraImagesKotleta.map((image, index) => (
          <img key={index} src={image} alt="Котлета" className='Kotleta'></img>
        ))}
        {showExtraImagesTomato.map((image, index) => (
          <img key={index} src={image} alt="Томат" className='Tomato'></img>
        ))}
        {showExtraImagesCheese.map((image, index) => (
          <img key={index} src={image} alt="Сыр" className='Cheese'></img>
        ))}
        <img src={myImage} alt="Мое изображение" className='Niz'></img>
      </div>
      <div className='bt'>
        <button onClick={() => toggleExtraImage(myKotleta, setShowExtraImagesKotleta, itemData[myKotleta].price)}>Добавить котлету</button>
        <button onClick={() => removeExtraSingleImage(myKotleta, setShowExtraImagesKotleta, itemData[myKotleta].price)}>Убрать одну котлету</button>
        <button onClick={() => toggleExtraImage(myCheese, setShowExtraImagesCheese, itemData[myCheese].price)}>Добавить сыр</button>
        <button onClick={() => removeExtraSingleImage(myCheese, setShowExtraImagesCheese, itemData[myCheese].price)}>Убрать один сыр</button>
        <button onClick={() => toggleExtraImage(myTomato, setShowExtraImagesTomato, itemData[myTomato].price)}>Добавить помидор</button>
        <button onClick={() => removeExtraSingleImage(myTomato, setShowExtraImagesTomato, itemData[myTomato].price)}>Убрать один помидор</button>
        <button onClick={() => toggleExtraImage(myList, setShowExtraImagesList, itemData[myList].price)}>Добавить лист салата</button>
        <button onClick={() => removeExtraSingleImage(myList, setShowExtraImagesList, itemData[myList].price)}>Убрать один лист салата</button>
      </div>
      <div className="cart">
        <h2>Корзина</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {itemData[item.image].name}: ${itemData[item.image].price} x {cart.filter(cartItem => cartItem.image === item.image).length}
            </li>
          ))}
        </ul>
        <p>Общая стоимость: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default MyComponent;