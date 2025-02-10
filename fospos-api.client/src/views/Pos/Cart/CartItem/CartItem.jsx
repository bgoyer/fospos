import { List } from "@phosphor-icons/react";
import OptionsList from "./OptionsList/OptionsList";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  // Assuming that the filtered options should come from item.options.
  // Replace this logic with the appropriate filtering if needed.
  const filteredOptions = item.options || [];

  return (
    <div className="cartItem">
      <div className="title">
        <p>{item.name}</p>
      </div>
      <div className="containerTop">
        <div className="quantity">
          <p>x{item.quantity || 1}</p>
        </div>
        <div className="price">
          <p>{item.price}</p>
        </div>
        <div className="itemOptionButton">
          <button aria-label="View options">
            <List />
          </button>
        </div>
      </div>
      <OptionsList optionList={filteredOptions} />
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number,
    options: PropTypes.array,
  }).isRequired,
};

export default CartItem;
