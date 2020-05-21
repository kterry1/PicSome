import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PictureContext } from "../pictureContext";
import useHover from "../hooks/useHover";

export default function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeItemFromCart } = useContext(PictureContext);
  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        onClick={() => removeItemFromCart(item.id)}
        className={iconClassName}
        ref={ref}
      ></i>
      <img alt="picture available to buy" src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
