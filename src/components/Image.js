import React, { useState, useContext } from "react";
import { PictureContext } from "../pictureContext";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";

export default function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const {
    toggleFavorite,
    cartItems,
    addItemToCart,
    removeItemFromCart,
  } = useContext(PictureContext);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          onClick={() => removeItemFromCart(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => addItemToCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div ref={ref} className={`${className} image-container`}>
      <img
        alt="Variety of Images to buy"
        src={img.url}
        className="image-grid"
      />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
