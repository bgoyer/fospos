import CartItem from "./CartItem/CartItem";

const CartList = ({ cart }) => {

    return cart?.map(item => (
        <CartItem key={item.id} item={item} />
    ));
}



export default CartList; 

