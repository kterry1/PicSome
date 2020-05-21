import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PictureContext } from "../pictureContext";

export default function Header() {
  const { cartItems } = useContext(PictureContext);
  return (
    <header>
      <Link to="/PicSome">
        <h2>Pic Some</h2>
      </Link>
      <Link to="/cart">
        {cartItems.length > 0 ? (
          <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        ) : (
          <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        )}
      </Link>
    </header>
  );
}
