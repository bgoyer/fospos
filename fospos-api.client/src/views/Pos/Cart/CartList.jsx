import CartItem from "./CartItem/CartItem";
import "./styles.css";


const CartList = ({ cart }) => {

    return cart?.map(item => (
        <CartItem key={item.id} item={item} />
    ));
}



export default CartList; 

