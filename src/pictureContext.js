import React, { useState, useEffect } from "react";
const PictureContext = React.createContext();

function PictureContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  function addItemToCart(newItem) {
    setCartItems((prevItem) => [...prevItem, newItem]);
  }

  function removeItemFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <PictureContext.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addItemToCart,
        cartItems,
        removeItemFromCart,
        emptyCart,
      }}
    >
      {children}
    </PictureContext.Provider>
  );
}

export { PictureContextProvider, PictureContext };
