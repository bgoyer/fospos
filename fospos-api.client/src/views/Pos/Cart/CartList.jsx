import PropTypes from "prop-types";
import CartItem from "./CartItem/CartItem";

const CartList = ({ cart = [] }) => {
  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return cart.map((item) => <CartItem key={item.id} item={item} />);
};

CartList.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      // ...other expected item properties
    })
  ),
};

export default CartList;
